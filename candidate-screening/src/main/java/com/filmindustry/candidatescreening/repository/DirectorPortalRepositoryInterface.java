package com.filmindustry.candidatescreening.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.filmindustry.candidatescreening.model.DirectorPortal;

@Repository
public interface DirectorPortalRepositoryInterface extends JpaRepository<DirectorPortal, Long> {

DirectorPortal findByFormId(long formId);
List<DirectorPortal> findAllByUserRegisteredId(long userRegisteredId);
}
