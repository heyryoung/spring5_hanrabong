package com.hanrabong.web.hd;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;
import com.hanrabong.web.hcust.HCust;

@Repository
public interface HCustHandler {

	@Insert("   INSERT INTO HCUST ( CNUM,CID, CPW, CNAME, GEN, BIRTH, SKIN_PROB, SKIN_TYPE, CHILD, ADDR, TEL, CPOINT)\r\n" + 
			"  	VALUES (#{cnum},#{cid},#{cpw},#{cname},#{gen},#{birth},#{skinProb},#{skinType},#{child},#{addr},#{tel},#{cpoint})  ")
	public void insertDumpArticle(HCust hCust);
	
	
}
