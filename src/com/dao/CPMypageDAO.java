package com.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.news.NewsEntity;
import com.comp.CompanyEntity;
import com.comp.recruit.RecruitEntity;
import com.user.*;

import mybatis.mybatisutil;



@Repository("mypageDAO")
public class CPMypageDAO {

	//관심목록 불러오기
	public List<NewsEntity> mynewslist(String id) {
		SqlSession session = mybatisutil.factory.openSession(); 
		List<NewsEntity> mynewslist = null;

		try {
			mynewslist = session.selectList("mypageMapper.mynewslist",id);
		} finally {
			session.close();
		}
		return mynewslist;
	}


	public List<RecruitEntity> myrecruitlist(String id) {
		SqlSession session = mybatisutil.factory.openSession(); 
		List<RecruitEntity> myrecruitlist = null;

		try {
			myrecruitlist = session.selectList("mypageMapper.myrecruitlist",id);
		} finally {
			session.close();
		}
		return myrecruitlist;
	}

	public List<CompanyEntity> mycomplist(String id) {
		SqlSession session = mybatisutil.factory.openSession(); 
		List<CompanyEntity> mycomplist = null;

		try {
			mycomplist = session.selectList("mypageMapper.mycomplist", id);
		} finally {
			session.close();
		}
		return mycomplist;
	}

	public List<CPSbookEntity> mysbooklike(CPSbookEntity sb) {
		SqlSession session = mybatisutil.factory.openSession(); 
		List<CPSbookEntity> mysbooklike = null;

		try {
			mysbooklike = session.selectList("mypageMapper.mysbooklike", sb);
		} finally {
			session.close();
		}
		return mysbooklike;
	}
	

	public List<CPSbookEntity> myownsblist(CPSbookEntity sb) {
		SqlSession session = mybatisutil.factory.openSession(); 
		List<CPSbookEntity> myownsblist = null;

		try {
			myownsblist = session.selectList("mypageMapper.myownsblist", sb);
		} finally {
			session.close();
		}
		return myownsblist;
	}

	//관심 목록에서 제거
	public int mynewsunlike(UserLike ulike) {
		SqlSession session = mybatisutil.factory.openSession();
		int res = 0;
		try {
			res = session.update("mypageMapper.mynewsunlike", ulike);
			if (res > 0) {
				session.commit();
			}
		} catch (Exception e) {
			session.rollback();
		} finally {
			session.close();
		}
		return res;
	}
	public int mycompunlike(UserLike ulike) {
		SqlSession session = mybatisutil.factory.openSession();
		int res = 0;
		try {
			res = session.update("mypageMapper.mycompunlike", ulike);
			if (res > 0) {
				session.commit();
			}
		} catch (Exception e) {
			session.rollback();
		} finally {
			session.close();
		}
		return res;
	}
	public int myrecunlike(UserLike ulike) {
		SqlSession session = mybatisutil.factory.openSession();
		int res = 0;
		try {
			res = session.update("mypageMapper.myrecunlike", ulike);
			if (res > 0) {
				session.commit();
			}
		} catch (Exception e) {
			session.rollback();
		} finally {
			session.close();
		}
		return res;
	}
	public int mysbookunlike(UserLike ulike) {
		SqlSession session = mybatisutil.factory.openSession();
		int res = 0;
		try {
			res = session.update("mypageMapper.mysbooksunlike", ulike);
			if (res > 0) {
				session.commit();
			}
		} catch (Exception e) {
			session.rollback();
		} finally {
			session.close();
		}
		return res;
	}

}
