package com.filmindustry.candidatescreening.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.filmindustry.candidatescreening.model.UserDetails;

@Repository
public interface UserDetailsRepositoryInterface extends JpaRepository<UserDetails, Long>{

	UserDetails findByUserEmail(String email);
	UserDetails findByUserRegisterationId(long id);
}
