package com.filmindustry.candidatescreening.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.filmindustry.candidatescreening.model.ApplicantPortal;


@Repository
public interface ApplicantPortalRepositoryInterface extends JpaRepository<ApplicantPortal, Long> {
	ApplicantPortal findByApplicantFormId(long appformId);
}
