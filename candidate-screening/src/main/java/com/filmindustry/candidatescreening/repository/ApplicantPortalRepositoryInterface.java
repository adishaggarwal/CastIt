package com.filmindustry.candidatescreening.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.filmindustry.candidatescreening.model.ApplicantPortal;
import com.filmindustry.candidatescreening.model.DirectorPortal;


@Repository
public interface ApplicantPortalRepositoryInterface extends JpaRepository<ApplicantPortal, Long> {
	ApplicantPortal findByApplicantFormId(long appformId);
	
	@Modifying
	@Query(nativeQuery = true,value = "SELECT b.* FROM castit_applicant_role_form b WHERE b.FORM_ID =:formId")
	List<ApplicantPortal> getApplicantListOnPostings(@Param("formId") long formId);
	
	@Modifying
	@Query(nativeQuery = true,value = "SELECT b.* FROM castit_applicant_role_form b WHERE b.FORM_ID =:formId")
	List<ApplicantPortal> getFeasableCandidates(@Param("formId") long formId);
	
	@Modifying
	@Query(nativeQuery = true,value = "Update castit_applicant_role_form b set b.PERCENTAGEMATCH=:percentageMatch WHERE b.APPLICANT_FORM_ID =:applicantFormId")
	void updatePercentage(@Param("applicantFormId") long applicantFormId,@Param("percentageMatch") String percentageMatch);

//	@Modifying
//	@Query(nativeQuery = true,value = "SELECT b.* FROM castit_applicant_role_form b.PERCENTAGEMATCH=:percentageMatch")
//	List<ApplicantPortal> getUpdatedListMatchedWithPercentage(@Param("percentageMatch") String percentageMatch);
}
