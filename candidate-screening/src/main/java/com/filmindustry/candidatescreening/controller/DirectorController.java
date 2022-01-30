package com.filmindustry.candidatescreening.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.filmindustry.candidatescreening.bean.DirectorPortalBean;
import com.filmindustry.candidatescreening.service.DirectorPortalServiceInterface;

@Validated
@RestController
@RequestMapping("/api/v1/directorportal/")
public class DirectorController {
	
	@Autowired
	private DirectorPortalServiceInterface DPSInterface;
	
	@PostMapping("addposting")
	public ResponseEntity<DirectorPortalBean> addPosting(@Valid @RequestBody DirectorPortalBean directorForm) {
		return new ResponseEntity<DirectorPortalBean>(DPSInterface.addPosting(directorForm),HttpStatus.CREATED);
	}
}
