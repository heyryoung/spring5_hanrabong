package com.hanrabong.web.hcust;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class HCustService {
	@Autowired HCustMapper hCustMapper;
	
	
	public String testTest() {
/*		List<Integer> list = Arrays.asList(1,2,3,4,5);
		Stream<Integer> intStream = list.stream();*/
		//List<Integer> list ;
		//Stream<Integer> stream ;//= Arrays.asList(1,2,3,4,5).stream();
		

		
	/*	List<Integer> list2 = new ArrayList<>();   // 위와 아래가 같은 코드 
		int i = 1 ;
		for (; i <= 10; i++) {
			System.out.println(i+ "+");
		}*/
		
		//Arrays.asList(1,2,3,4,5).stream().forEach(System.out:: print);   // for를 메서드로 처리하고 print를 메서드 참조로 처
		//return String.valueOf("5");
		
		//IntStream.range(101, 200).forEach(System.out::print);
		new Random().ints().limit(5).forEach(System.out::println);
		return String.valueOf("5");
		
		
	}
	
	public String selectAll() {
		List<HCust> ls = hCustMapper.selectAll();
		
		List<String> ls2 = new ArrayList<>();
		for (int i = 0; i < ls.size(); i++) {
			ls2.add(ls.get(i).getCid()+"\n");
		}
		
		Stream.of(ls2)
		.sorted()
		.forEach(System.out::println);
		
		return String.valueOf("5");
	}
	
	
}
