package com.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.news.news;
import com.service.CPNewsService;

@Controller
public class CPNewsController {

	@Autowired
	private CPNewsService cpns;

	@RequestMapping("/news_body.do")
	public ModelAndView gonewsdetail(@RequestParam("news_number") String number) {
		ModelAndView mav = new ModelAndView("view/news/news_body");
		news newss = cpns.getnewsbynum(number);
		mav.addObject("newsdetail", newss);
		String url = newss.getUrl();
		try {
			Document doc = Jsoup.connect(url).get();
			mav.addObject("articleBodyContents", doc.select("#articleBodyContents"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return mav;
	}

	@RequestMapping("/news_all.do")
	public ModelAndView newsall() {
		ModelAndView mav = new ModelAndView("view/news/news_all");
		List<news> newslist = null;

		try {
			newslist = cpns.selectall();
		} catch (Exception e) {
			e.printStackTrace();
		}

		mav.addObject("newslist", newslist);
		return mav;

	}

	@RequestMapping("/news_list.do")
	public ModelAndView newslist(@RequestParam("page") String page,String title,  HttpServletRequest req) {
		ModelAndView mav = new ModelAndView("view/news/news_all");
		List<news> newslist = null;
		
		if(title.equals("")) {
			try {
				newslist = cpns.selectall();
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		}else {
			try {
				newslist = cpns.searchtitle(title);
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		
		
		
		int p = (Integer.parseInt(page) - 1) * 10;
		
		
		List<news> newnewslist = null;
		
		if (p > newslist.size()) {
			ModelAndView mv = new ModelAndView("view/news/news_all");
			//System.out.println(6);
			mv.addObject("newslist",cpns.selectall());
			mv.addObject("cpage", 1);
			//System.out.println(7);
			return mv;
			
		}

		if ((newslist.size() - p) < 10) {
			//System.out.println(8);
			newnewslist = newslist.subList(p, newslist.size());
			//System.out.println(9);
		} else {

			newnewslist = newslist.subList(p, p + 9);

		}
		
		int returnpage = Integer.parseInt(page);
		req.removeAttribute("newslist");
		mav.addObject("newslist", newnewslist);
		mav.addObject("cpage", returnpage);
		return mav;
	}

	@RequestMapping("/news_pre.do")
	public ModelAndView newspre(@RequestParam("page") String prepage,@RequestParam("title") String title ,HttpServletRequest req) {
		ModelAndView mav = new ModelAndView("view/news/news_all");
		List<news> newslist = null;
		
		if(title.equals("")) {
			try {
				newslist = cpns.selectall();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else {
			try {
				newslist = cpns.searchtitle(title);
			}catch (Exception e) {
				e.printStackTrace();
			}
		}

		int p = (Integer.parseInt(prepage) - 1) * 10;

		List<news> newnewslist = null;

		if (p > newslist.size()) {
			ModelAndView mv = new ModelAndView("view/news/news_all");
			mv.addObject("newslist",req.getAttribute("newslist"));
			return mv;

		}

		if ((newslist.size() - p) < 10) {

			newnewslist = newslist.subList(p, newslist.size());

		} else {

			newnewslist = newslist.subList(p, p + 9);

		}
		int returnpage = Integer.parseInt(prepage) - 1;
		mav.addObject("newslist", newnewslist);
		mav.addObject("cpage", returnpage);
		return mav;
	}

	@RequestMapping("/news_search.do")
	public ModelAndView newstitlesearch(@RequestParam("title") String title, HttpServletRequest req) {
		ModelAndView mav = new ModelAndView("view/news/news_all");
		List<news> newslist = null;

		try {
			newslist = cpns.searchtitle(title);
		} catch (Exception e) {
			e.printStackTrace();
		}
		req.setAttribute("title", title);
		mav.addObject("newslist", newslist);
		return mav;
	}

// 관심목록에서 추가 
	@RequestMapping("/mynews_like.do")
	public ModelAndView mynewslike(@RequestParam("news_number") String news_number, @RequestParam("id") String id) {
		// check=1으로 셋하는 쿼리 다녀오기
		int res = cpns.mynewslike(news_number, id);
		if (res > 0) {
			return new ModelAndView("필요하신 내용으로");
		} else {
			return new ModelAndView("error", "error", "추가하지 못했습니다");
		}
	}
}