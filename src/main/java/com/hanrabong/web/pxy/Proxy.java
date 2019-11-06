package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.Brd;
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
	private List<Integer>blist = new ArrayList<>();
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
		blist.clear();
		for (int i = 0;  i < (endPage- startPage+1) ; i++) {
			blist.add(startPage+i);
		}
	}
	
	public int parseInt(String param) {
		Function<String, Integer> f = s-> Integer.parseInt(s);
		return f.apply(param);
	}
	
	
	public List<String> crawl(Map<?, ?> paramMap) {
		String url ="";
		System.out.println(paramMap.get("targetSite").toString());
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
	
	public List<String> olivecrawl() {

		List<String> proxyList = new ArrayList<String>();
		try {

			
			//System.out.println(temp2.html());
/*		            temp = soup.find('#artcInfo')
		          	            b_tag = soup.find("div", {"id": "artcAjaxInfo"})
		          	            b_tag1 = b_tag.find_all("dl", {"class": "detail_info_list"})[6].find("dd").text
*/
			
		} catch (Exception e2) {
			e2.printStackTrace();
		}
				
		
		return proxyList;
	} 	
	
	public int random(int n , int m) {
		
		BiFunction<Integer,Integer,Integer> r = (t,u) ->(int) (Math.random() * (m-n)) +n;  
		
		return r.apply(n, m);
	}
	
	
	
}
