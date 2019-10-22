package com.hanrabong.web.cust;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.utl.Printer;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/hcust")
@Log4j
public class HCustCtrl {
	
	private static final Logger logger = LoggerFactory.getLogger(HCustCtrl.class);
	//@Autowired HCustServiceImpl hCustService;
	@Autowired Map<String, Object>map;
	@Autowired HCustDTO hcust;
	@Autowired Printer printer;
	
	@PostMapping("/")
	public HCustDTO join(@RequestBody HCustDTO param) {
		printer.accept("람다 프린터가 출력한 값"+param.getCid() +","+ param.getCpw());
		//int temp = hCustService.lastCNum();
		//param.setCnum(String.valueOf(temp+1));
		//hCustService.insertHCust(param);
		
		//return hCustService.selectHCustByCNum(temp+1);
		return param;
	}
	
	@PostMapping("/login")
	public HCustDTO login(@RequestBody HCustDTO param) {
		logger.info("login>>>>ajax가 보낸 아이디 {}", param.getCid() +","+ param.getCpw());
		HCustDTO hcust = new HCustDTO();
		//hcust = hCustService.login(param);

		return hcust;
	}
	
	
	
}
