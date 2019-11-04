package com.hanrabong.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum;
	private String search;
	//@Autowired List<String> proxyList;
	
	
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
