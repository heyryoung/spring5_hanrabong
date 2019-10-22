package com.hanrabong.web.cust;

import org.springframework.stereotype.Component;
@Component
public interface HCustService {
	
	public int countHCusts();
	public int lastCNum();
	public HCustDTO selectHCustByCNum(int param);
	
	public HCustDTO login(HCustDTO param);
	public void insertHCust(HCustDTO param);
	
}
