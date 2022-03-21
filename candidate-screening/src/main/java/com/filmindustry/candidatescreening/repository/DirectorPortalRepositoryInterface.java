package com.filmindustry.candidatescreening.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.filmindustry.candidatescreening.model.DirectorPortal;

@Repository
public interface DirectorPortalRepositoryInterface extends JpaRepository<DirectorPortal, Long> {

DirectorPortal findByFormId(long formId);
List<DirectorPortal> findAllByUserRegisteredId(long userRegisteredId);
List<DirectorPortal> findAllByroleStatus(String status);
//@Transactional
//@Procedure(name = "DirectorPortal.getNonAppliedPostings")
//@Query(nativeQuery = true,value = "call CASTIT_PROC_FIND_NONAPPLIED_POSTINGS(:USER_REGISTRATION_ID)")
//List<DirectorPortal> getNonAppliedPostings(@Param("USER_REGISTRATION_ID") long USER_REGISTRATION_ID);
//@Transactional
//@Procedure("CASTIT_PROC_FIND_NONAPPLIED_POSTINGS")
//List<DirectorPortal> getNonAppliedPostings(long USER_REGISTRATION_ID,List<DirectorPortal> dp);
@Modifying
@Query(nativeQuery = true,value = "SELECT b.* FROM castit_DIRECTOR_role_form b WHERE b.ROLE_STATUS='Active' and b.FORM_ID NOT IN"
		+ "(SELECT a.FORM_ID FROM castit_applicant_role_form a WHERE a.registration_id= :userRegisteredId)")
List<DirectorPortal> getNonAppliedPostings(@Param("userRegisteredId") long userRegisteredId);

//@Modifying
//@Query(nativeQuery = true,value = "SELECT b.* FROM castit_DIRECTOR_role_form b WHERE b.ROLE_STATUS='Active' and b.FORM_ID IN"
//		+ "(SELECT a.FORM_ID FROM castit_applicant_role_form a WHERE a.registration_id= :userRegisteredId)")
//List<DirectorPortal> getAppliedPostings(@Param("userRegisteredId") long userRegisteredId);
@Modifying
@Query(nativeQuery = true,value = "SELECT a.applicant_form_id,b.*"
		+ "FROM castit_DIRECTOR_role_form b,castit_applicant_role_form a "
		+ "WHERE a.form_id=b.form_id and b.ROLE_STATUS='Active' and a.registration_id= :userRegisteredId")
List<DirectorPortal> getAppliedPostings(@Param("userRegisteredId") long userRegisteredId);

}
