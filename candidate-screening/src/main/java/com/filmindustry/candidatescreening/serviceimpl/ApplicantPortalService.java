package com.filmindustry.candidatescreening.serviceimpl;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.filmindustry.candidatescreening.bean.ApplicantPortalBean;
import com.filmindustry.candidatescreening.model.ApplicantPortal;
import com.filmindustry.candidatescreening.repository.ApplicantPortalRepositoryInterface;
import com.filmindustry.candidatescreening.service.ApplicantPortalServiceInterface;

@Service
public class ApplicantPortalService implements ApplicantPortalServiceInterface{
	
	@Autowired
	private ApplicantPortalRepositoryInterface APRInterface;

	public ApplicantPortalBean applyPosting(ApplicantPortalBean applicantForm) {
		ApplicantPortalBean bean=null;
		ApplicantPortal entity=null;
		try
		{
	        entity=new ApplicantPortal();
		    bean=new ApplicantPortalBean();
			BeanUtils.copyProperties(applicantForm, entity);
			ApplicantPortal savedData=APRInterface.save(entity);
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
	@Override
	public ApplicantPortalBean deletePosting(long appformId) {
		// TODO Auto-generated method stub
		ApplicantPortalBean bean=null;
		ApplicantPortal entity=null; 	    
		try
		{
	        entity=new ApplicantPortal();
		    entity.setApplicantFormId(appformId);
		    APRInterface.deleteById(entity.getApplicantFormId());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
			return new ApplicantPortalBean("Error at the server end");
		}
		bean=new ApplicantPortalBean(null,"Success");
		bean.setApplicantFormId(appformId);
		return bean;
	}

	@Override
	public ApplicantPortalBean updatePosting(long applicantFormId, @Valid ApplicantPortalBean applicantForm) {
		// TODO Auto-generated method stub
		ApplicantPortalBean bean=null;
		ApplicantPortal entity=null;
	    
		try
		{
	        entity=new ApplicantPortal();
		    bean=new ApplicantPortalBean();
		    entity.setApplicantFormId(applicantFormId);
		    ApplicantPortal previousData=APRInterface.findByApplicantFormId(entity.getApplicantFormId());
			previousData.setCharacteristics1(applicantForm.getCharacteristics1());
			previousData.setCharacteristics2(applicantForm.getCharacteristics2());
			previousData.setCharacteristics3(applicantForm.getCharacteristics3());
			previousData.setCharacteristics4(applicantForm.getCharacteristics4());
			previousData.setCharacteristics5(applicantForm.getCharacteristics5());
			previousData.setFormId(applicantForm.getFormId());
			previousData.setUserRegisteredId(applicantForm.getUserRegisteredId());
			ApplicantPortal savedData=APRInterface.save(previousData);
			BeanUtils.copyProperties(savedData, bean);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
			return new ApplicantPortalBean("Error at the server end");
		}
		return bean;
	}
}
