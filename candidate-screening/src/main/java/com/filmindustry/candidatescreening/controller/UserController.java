package com.filmindustry.candidatescreening.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.filmindustry.candidatescreening.bean.UserDetailsBean;
import com.filmindustry.candidatescreening.service.UserDetailsServiceInterface;

@CrossOrigin("*")
@Validated
@RestController
@RequestMapping("/api/v1/userdetails/")
public class UserController {

	@Autowired
	private UserDetailsServiceInterface UDServiceInter;
	
	@PostMapping("adduser")
	public ResponseEntity<UserDetailsBean> saveUsers(@Valid @RequestBody UserDetailsBean user) {
		return new ResponseEntity<UserDetailsBean>(UDServiceInter.saveUsers(user),HttpStatus.CREATED);
	}
	
//	@GetMapping("checkuser")
//	public ResponseEntity<UserDetailsBean> loginUsers(HttpServletRequest request,HttpServletResponse response) {
//		return new ResponseEntity<UserDetailsBean>(UDServiceInter.loginUsers(request.getParameter("userEmail"),request.getParameter("userPassword")),HttpStatus.OK);
	//}
	@PostMapping("checkuser")
	public ResponseEntity<UserDetailsBean> loginUsers(@RequestBody UserDetailsBean user) {
		return new ResponseEntity<UserDetailsBean>(UDServiceInter.loginUsers(user.getUserEmail(),user.getUserPassword()),HttpStatus.OK);
	}
	
	@DeleteMapping("deleteuser")
	public ResponseEntity<UserDetailsBean> deleteUser(@RequestBody UserDetailsBean user) {
		return new ResponseEntity<UserDetailsBean>(UDServiceInter.deleteUser(user.getUserRegisterationId()),HttpStatus.OK);
	}
	
	@PutMapping("updateuser")
	public ResponseEntity<UserDetailsBean> updateUser(@Valid @RequestBody UserDetailsBean user) {
		return new ResponseEntity<UserDetailsBean>(UDServiceInter.updateUser(user.getUserEmail(),user),HttpStatus.OK);
	}
}
