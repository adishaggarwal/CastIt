package com.filmindustry.candidatescreening.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.filmindustry.candidatescreening.bean.ApplicantPortalBean;
import com.filmindustry.candidatescreening.bean.DirectorPortalBean;
import com.filmindustry.candidatescreening.service.ApplicantPortalServiceInterface;

@Validated
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/applicantportal/")
public class ApplicantController {
	@Autowired
	private ApplicantPortalServiceInterface APSInterface;
	
	@PostMapping("applyposting")
	public ResponseEntity<ApplicantPortalBean> applyPosting(@Valid @RequestBody ApplicantPortalBean applicantForm) {
		return new ResponseEntity<ApplicantPortalBean>(APSInterface.applyPosting(applicantForm),HttpStatus.CREATED);
	}
	@DeleteMapping("deleteapplication")
	public ResponseEntity<ApplicantPortalBean> deletePosting(@RequestBody ApplicantPortalBean applicantForm) {
		return new ResponseEntity<ApplicantPortalBean>(APSInterface.deletePosting(applicantForm.getApplicantFormId()),HttpStatus.OK);
	}
	
	@PutMapping("updateapplication")
	public ResponseEntity<ApplicantPortalBean> updatePosting(@Valid @RequestBody ApplicantPortalBean applicantForm) {
		return new ResponseEntity<ApplicantPortalBean>(APSInterface.updatePosting(applicantForm.getApplicantFormId(),applicantForm),HttpStatus.OK);
	}
	
	@PostMapping("getapplicantlistonpostings")
	@Transactional(readOnly = true)
	public ResponseEntity<List<ApplicantPortalBean>> getApplicantListOnPostings(@RequestBody ApplicantPortalBean applicantForm) {
		return  new ResponseEntity<List<ApplicantPortalBean>>(APSInterface.getApplicantListOnPostings(applicantForm.getFormId()),HttpStatus.OK);
	}
	
	@PostMapping("getfeasablecandidates")
	@Transactional(readOnly = true)
	public ResponseEntity<List<ApplicantPortalBean>> getFeasableCandidates(@RequestBody ApplicantPortalBean applicantForm) {
		return  new ResponseEntity<List<ApplicantPortalBean>>(APSInterface.getFeasableCandidates(applicantForm.getFormId(), applicantForm.getPercentageMatch()),HttpStatus.OK);
	}
	
	

}