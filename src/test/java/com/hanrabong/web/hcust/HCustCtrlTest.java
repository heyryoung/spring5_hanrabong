package com.hanrabong.web.hcust;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.AnnotationConfigWebContextLoader;
import org.springframework.test.context.web.WebAppConfiguration;

import com.hanrabong.web.cfg.RootConfig;
import com.hanrabong.web.cfg.ServletConfig;
import com.hanrabong.web.cfg.WebConfig;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { RootConfig.class, ServletConfig.class,
		WebConfig.class }, loader = AnnotationConfigWebContextLoader.class)
@WebAppConfiguration
public class HCustCtrlTest {
	@Autowired HCustCtrl hCustCtrl;
	
	@Test
	public void lastCNum() {
		assertThat(hCustCtrl.lastCNum(), not(equalTo(0)));
	}


}
