package com.filmindustry.candidatescreening.serviceimpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filmindustry.candidatescreening.bean.DirectorPortalBean;
import com.filmindustry.candidatescreening.model.DirectorPortal;
import com.filmindustry.candidatescreening.repository.DirectorPortalRepositoryInterface;
import com.filmindustry.candidatescreening.service.DirectorPortalServiceInterface;

@Service
public class DirectorPortalService implements DirectorPortalServiceInterface{

	@Autowired
	private DirectorPortalRepositoryInterface DPRInterface;

	@Override
	public DirectorPortalBean addPosting(DirectorPortalBean directorForm) {
		DirectorPortalBean bean=null;
		DirectorPortal entity=null; 
		String patternChecker="";
		boolean match;
	    
		try
		{
	        entity=new DirectorPortal();
		    bean=new DirectorPortalBean();
			BeanUtils.copyProperties(directorForm, entity);
			DirectorPortal savedData=DPRInterface.save(entity);
			BeanUtils.copyProperties(savedData, bean);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
		}
		return bean;
	}
}
