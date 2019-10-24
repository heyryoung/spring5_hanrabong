package com.hanrabong.web.hcust;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.IFunction;
import com.hanrabong.web.cmm.IPredicate;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.utl.Printer;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/hcusts")
@Log4j
public class HCustCtrl {
	
	private static final Logger logger = LoggerFactory.getLogger(HCustCtrl.class);
	@Autowired Map<String, Object>map;
	@Autowired HCust hcust;
	@Autowired Printer printer;
	@Autowired HCustMapper hCustMapper;
	
	
	@GetMapping("/{cid}/exist")
	public Map<?,?> existId(@PathVariable String cid){
		IFunction<String, Integer> p  =o -> hCustMapper.existId(cid); 
		map.clear();
		map.put("msg",(p.apply(cid) ==0) ? "SUCCESS" : "FAIL");
		return map;
	}
	
	
	@PostMapping("/")
	public Map<?,?> join(@RequestBody HCust param) {
		ISupplier<Integer> n = ()-> hCustMapper.lastCNum();
		param.setCnum(String.valueOf(n.get()+1));
		IConsumer<HCust> c = t->hCustMapper.insertHCust(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/{cid}")
	public HCust login(@PathVariable String cid ,@RequestBody HCust param) {
		IFunction<HCust,HCust> f = t ->  hCustMapper.selectByCidCpw(param); 
		return f.apply(param);
	}
	
	@GetMapping("/{cid}")
	public HCust searchHCustById(@PathVariable String cid ,@RequestBody HCust param) {
		IFunction<HCust,HCust> f = t ->  hCustMapper.selectByCidCpw(param); 
		return f.apply(param);
	}
	
	@PutMapping("/{cid}")
	public String updateHCust(@PathVariable String cid ,@RequestBody HCust param) {
		IConsumer<HCust> c = t->hCustMapper.insertHCust(param);
		c.accept(param);
		return "SUCCESS";
		
	}
	
	@DeleteMapping("/{cid}")
	public String removeHCust(@PathVariable String cid ,@RequestBody HCust param) {
		IConsumer<HCust> c = t->hCustMapper.insertHCust(param);
		c.accept(param);
		return "SUCCESS";
		
	}
	
	
	
	
}
