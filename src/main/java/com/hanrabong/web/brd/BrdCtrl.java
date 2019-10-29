package com.hanrabong.web.brd;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.IFunction;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.hcust.HCust;
import com.hanrabong.web.hcust.HCustCtrl;
import com.hanrabong.web.utl.Printer;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/articles")
public class BrdCtrl {
	@Autowired Map<String, Object>map;
	@Autowired List<Brd>list;
	@Autowired Brd brd;
	@Autowired Printer printer;
	@Autowired BrdMapper brdMapper;
	
	@GetMapping("/") 		//	GET / post	글 목록(posts)을 봅니다(GET)
	public List<Brd> articleList(){
		list.clear();
		ISupplier<List<Brd>> n = ()-> brdMapper.selectAllArticles();
		list = (List<Brd>) n.get();
		return list;
	}
	
	@GetMapping("/{brdseq}")		 //GET / post	글 (posts)을 봅니다(GET)
	public Brd readArticle (@PathVariable String brdseq ){
		ISupplier<Brd> n = ()-> brdMapper.selectArticle(brdseq);
		brd = n.get();
		return brd;
	}

	@PostMapping("/")		//POST   / posts	글(posts)을 생성합니다(POST)
	public Map<?,?> writeArticle(@RequestBody Brd param){
		IConsumer<Brd> c = t->brdMapper.insertArticle(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PutMapping("/{brdseq}") 	//글(posts)을 수정합니다.(PUT)   
	public  Brd updateArticle(@PathVariable String brdseq ,@RequestBody Brd param){
		IConsumer<Brd> c = t->brdMapper.modify(param);
		c.accept(param);
		ISupplier<Brd> n = ()-> brdMapper.selectArticle(param.getBrdseq());
		brd = n.get();
		return brd;
	}
	
	@DeleteMapping("/{brdseq}")	 //	delete  /  posts /:id		글(posts)을 삭제합니다.(DELETE)
	public Map<?,?> deleteArticle(@PathVariable String brdseq ,@RequestBody Brd param ){
		IConsumer<Brd> c = t->brdMapper.delete(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}
