package com.filmindustry.candidatescreening.service;

import com.filmindustry.candidatescreening.bean.DirectorPortalBean;

public interface DirectorPortalServiceInterface {

	DirectorPortalBean addPosting(DirectorPortalBean directorForm);

	DirectorPortalBean checkPosting(long formId);

	DirectorPortalBean deletePosting(long formId);

	DirectorPortalBean updatePosting(long formId,DirectorPortalBean directorForm);

}
