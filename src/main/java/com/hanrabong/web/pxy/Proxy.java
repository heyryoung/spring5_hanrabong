package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum,pageSize,startRow;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired BrdMapper brdMapper;	
	
	public void paging() {
		ISupplier<Integer> s = ()->brdMapper.countAllArticle();
		int totalCount = s.get();
		int pageCount =(totalCount %pageSize==0) ?  totalCount/pageSize : (totalCount/pageSize)+1;
		startRow = (pageNum-1) * pageSize;
		
		int endRow = (pageNum == pageCount) ?   totalCount -1 : pageNum*pageSize-1;
		int blockCount = (pageCount %BLOCK_SIZE==0) ?  pageCount/BLOCK_SIZE : (pageCount/BLOCK_SIZE)+1;
		int startPage =pageNum/(pageSize * BLOCK_SIZE)+1;
		int endPage = ((pageCount-startPage)>(pageSize * BLOCK_SIZE) ) ?   startPage + BLOCK_SIZE -1 
				: (pageCount-startPage)/pageSize ;
		boolean existPrev = false;
		boolean existNext = false;
		
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
	
}
