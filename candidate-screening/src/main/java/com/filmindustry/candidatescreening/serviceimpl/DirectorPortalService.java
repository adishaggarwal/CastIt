package com.filmindustry.candidatescreening.serviceimpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filmindustry.candidatescreening.bean.DirectorPortalBean;
import com.filmindustry.candidatescreening.bean.UserDetailsBean;
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
			return new DirectorPortalBean("Error at the server end");
		}
		return bean;
	}

	@Override
	public DirectorPortalBean checkPosting(long formId) {
		DirectorPortalBean bean=null;
		DirectorPortal entity=null; 	    
		try
		{
	        entity=new DirectorPortal();
		    bean=new DirectorPortalBean();
		    entity.setFormId(formId);
			DirectorPortal savedData=DPRInterface.findByFormId(entity.getFormId());
			BeanUtils.copyProperties(savedData, bean);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
			return new DirectorPortalBean("Error at the server end");
		}
		return bean;
	}

	@Override
	public DirectorPortalBean deletePosting(long formId) {
		DirectorPortalBean bean=null;
		DirectorPortal entity=null; 	    
		try
		{
	        entity=new DirectorPortal();
		    entity.setFormId(formId);
			DPRInterface.deleteById(entity.getFormId());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
			return new DirectorPortalBean("Error at the server end");
		}
		bean=new DirectorPortalBean(null,"Success");
		bean.setFormId(formId);
		return bean;
	}

	@Override
	public DirectorPortalBean updatePosting(long formId, DirectorPortalBean directorForm) {
		DirectorPortalBean bean=null;
		DirectorPortal entity=null; 
		String patternChecker="";
		boolean match;
	    
		try
		{
	        entity=new DirectorPortal();
		    bean=new DirectorPortalBean();
		    entity.setFormId(formId);
			DirectorPortal previousData=DPRInterface.findByFormId(entity.getFormId());
			previousData.setCharacteristics1(directorForm.getCharacteristics1());
			previousData.setCharacteristics2(directorForm.getCharacteristics2());
			previousData.setCharacteristics3(directorForm.getCharacteristics3());
			previousData.setCharacteristics4(directorForm.getCharacteristics4());
			previousData.setCharacteristics5(directorForm.getCharacteristics5());
			previousData.setMovieDesc(directorForm.getMovieDesc());
			previousData.setMovieGenre(directorForm.getMovieGenre());
			previousData.setMovieName(directorForm.getMovieName());
			previousData.setRole(directorForm.getRole());
			previousData.setRoleDescription(directorForm.getRoleDescription());
			DirectorPortal savedData=DPRInterface.save(previousData);
			BeanUtils.copyProperties(savedData, bean);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
			return new DirectorPortalBean("Error at the server end");
		}
		return bean;
	}
}
