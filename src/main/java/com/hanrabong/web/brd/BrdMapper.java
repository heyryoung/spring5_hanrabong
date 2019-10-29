package com.hanrabong.web.brd;

import java.util.ArrayList;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public interface BrdMapper {

	public ArrayList<Brd> selectAllArticles();
	public Brd selectArticle(String brdseq);
	public void insertArticle(Brd param);
	public void modify(Brd paeam);
	public void delete(Brd paeam);
	public int  lastArticle();
	
}
