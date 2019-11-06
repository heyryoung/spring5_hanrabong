package com.hanrabong.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanrabong.web.pxy.Proxy;

@Transactional
@Service
public class TxService {
	@Autowired TxMapper txMapper;
	//@Autowired HashMap<String, Object> txServiceMap;
	@Autowired Proxy pxy;
	//@Autowired List<String> txServicelist;

	public List<?> crawling(Map<?,?> paramMap) {
		 List<String> txServicelist = new ArrayList<>();
		txServicelist.clear();
		txServicelist = (List<String>) pxy.crawl(paramMap);
		return txServicelist;
	}
	public List<?> olivecrawling() {
		List<String> txServicelist = new ArrayList<>();
		txServicelist.clear();
		txServicelist = (List<String>) pxy.olivecrawl();
		System.out.println(txServicelist.toString());
		return txServicelist;
	}
	
}
