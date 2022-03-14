package com.filmindustry.candidatescreening.service;

import javax.validation.Valid;

import com.filmindustry.candidatescreening.bean.ApplicantPortalBean;
import com.filmindustry.candidatescreening.bean.UserDetailsBean;

public interface ApplicantPortalServiceInterface {

	ApplicantPortalBean applyPosting(@Valid ApplicantPortalBean applicantForm);
	ApplicantPortalBean deletePosting(long appformId);
	ApplicantPortalBean updatePosting(long applicantFormId, @Valid ApplicantPortalBean applicantForm);

}
