package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum,pageSize,startRow,endRow
		,startPage,endPage
		,totalCount,pageCount,blockCount;
	private boolean existNext,existPrev;
	private String search;
	private final int BLOCK_SIZE = 5;
	private List<Integer>blist ;
	private List<String>plist = new ArrayList<>();
	private List<String> proxyList;	
	private List<String> categoryList;	
	@Autowired BrdMapper brdMapper;
	
	public boolean getExistPrev() {
		return this.existPrev;
	}
	public boolean getExistNext() {
		return this.existNext;
	}
	 
	public void paging() {
		ISupplier<Integer> s = ()->brdMapper.countAllArticle();
		totalCount = s.get();
		pageCount =(totalCount %pageSize==0) ?  totalCount/pageSize : (totalCount/pageSize)+1;
		startRow = (pageNum-1) * pageSize;
		endRow = (pageNum == pageCount) ?   totalCount -1 : pageNum*pageSize-1;
		blockCount = (pageCount %BLOCK_SIZE==0) ?  pageCount/BLOCK_SIZE : (pageCount/BLOCK_SIZE)+1; //블럭의 개수
		startPage =   ((pageNum-1)/BLOCK_SIZE)*BLOCK_SIZE+1; // 
		
		endPage = ((pageCount-startPage)<(BLOCK_SIZE) ) ?   pageCount: (startPage + BLOCK_SIZE -1); // 
		existPrev = (startPage < (BLOCK_SIZE+1) ) ? false : true;  // start Page가 BLOCK_SIZE+1보다 작으면 없음.
		existNext =  (pageCount == endPage) ? false : true; // 페이지수가 endPage와 같으면 없음.
		blist = new ArrayList<>();
		for (int i = startPage;  i < endPage+1 ; i++) {
			blist.add(i);
		}
	}
	 
	public int parseInt(String param) {
		Function<String, Integer> f = s-> Integer.parseInt(s);
		return f.apply(param);
	}
	
	
	public List<String> crawl(Map<?, ?> paramMap) {
		String url ="";
		switch (paramMap.get("targetSite").toString()) {
		case "google":
			url = "https://www.google.co.kr/";
			break;
		case "naver":
			url = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="+paramMap.get("searchWrd");
			break;
		case "youtube":
			url = "https://www.youtube.com/results?search_query="+paramMap.get("searchWrd");
			break;
		default:
			break;
		}

		List<String> proxyList = new ArrayList<String>();
		try {
			Connection.Response response = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = response.parse();
			String text = document.text();
			proxyList.clear();
			proxyList.add(text);
		} catch (Exception e2) {
			e2.printStackTrace();
		}
				
		
		return proxyList;
	} 
	
	public List<String> olivecrawl(String categoryNum) {

		List<String> tempList = new ArrayList<String>();
		try {
			for (int pageIndex = 0; pageIndex < 1; pageIndex++) {
				final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"; 
				String oliveurl = "http://www.oliveyoung.co.kr/store/display/getMCategoryList.do?dispCatNo="+categoryNum+"&fltDispCatNo=&prdSort=01&pageIdx="+pageIndex+"&rowsPerPage=24&searchTypeSort=btn_thumb" ;

				Connection.Response homePage = Jsoup.connect(oliveurl)  
				     .method(Connection.Method.GET)  
				     .userAgent(USER_AGENT)  
				     .execute();
 
				Document temp = homePage.parse();
				Elements  tempforPName = temp.select("p.tx_name");
				Elements  tempforCurPrice = temp.select("span.tx_cur");
				Elements  tempforBrand = temp.select("span.tx_brand");
				
				int index =0;
				for (Element element : tempforPName) {
					if (index == 12 ) {
						break;
					}
					if(!element.text().contains("(한정판매)")) {  //한정판매 상품 제거
						tempList.add("제품 이름:    "+element.text().replace("기획", "").replace("[1+1]","").replace("[올리브영 단독]", "").replace("[한정]", "").replace("[온라인단독]","").replace("[닥터자르트]", "")
								+" 브랜드 :   "+tempforBrand.get(index).text()
								+ " 가격 :   "+tempforCurPrice.get(index).text() );
						index++;
					}

				}
			}
			
		} catch (Exception e2) {
			e2.printStackTrace();
		}
				
		
		return tempList;
	} 	
	
	
	public List<String> getCategoty() throws Exception {
		
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"; 
		String oliveurl = "http://www.oliveyoung.co.kr/store/main/main.do" ;

		Connection.Response homePage = Jsoup.connect(oliveurl)  
		     .method(Connection.Method.GET)  
		     .userAgent(USER_AGENT)  
		     .execute();		
		
		Document temp = homePage.parse();
		
		Elements  temp1 = temp.select("ul.all_menu_wrap").select("a");
		
		System.out.println(temp1.size() + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<" ); // 카테고리 갯수 
		
		List<String> categoryList = new ArrayList<String>();
		List<String> tempList = new ArrayList<String>();
		List<String> tempList1 = new ArrayList<String>();
		for (Element element : temp1) {
			if (element.attr("data-ref-dispcatno").length() !=11) {
				categoryList.add(element.attr("data-ref-dispcatno"));
			}
		}
		int index1 =0;
		for (String element : categoryList) {
			tempList.clear();
			tempList = olivecrawl(element);
			for (String string : tempList) {
				if (string != null) {
					tempList1.add(index1, string);  
					index1++;
				}
			}
		}
		
		return tempList1;
	}
	
	
	public int random(int n , int m) {
		
		BiFunction<Integer,Integer,Integer> r = (t,u) ->(int) (Math.random() * (m-n)) +n;  
		
		return r.apply(n, m);
	}
	
	
	
}
