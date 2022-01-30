package com.filmindustry.candidatescreening.bean;

public class DirectorPortalBean {

	private long formId;
	
	private long userRegisteredId;
	
	private String movieName;
	
	private String movieDesc;
	
	private String movieStatus;
	
	private String movieGenre;
	
	private String role;
	
	private String roleDescription;
	
	private String characteristics1;
	
	private String characteristics2;
	
	private String characteristics3;
	
	private String characteristics4;
	
	private String characteristics5;
	
	private String roleStatus;
	
	private String roleGivenTo;
	
	private long roleGivenToID;
	
	public DirectorPortalBean() {
		// TODO Auto-generated constructor stub
	}

	public DirectorPortalBean(long userRegisteredId, String movieName, String movieDesc, String movieStatus,
			String movieGenre, String role, String roleDescription, String characteristics1, String characteristics2,
			String characteristics3, String characteristics4, String characteristics5, String roleStatus,
			String roleGivenTo, long roleGivenToID) {
		super();
		this.userRegisteredId = userRegisteredId;
		this.movieName = movieName;
		this.movieDesc = movieDesc;
		this.movieStatus = movieStatus;
		this.movieGenre = movieGenre;
		this.role = role;
		this.roleDescription = roleDescription;
		this.characteristics1 = characteristics1;
		this.characteristics2 = characteristics2;
		this.characteristics3 = characteristics3;
		this.characteristics4 = characteristics4;
		this.characteristics5 = characteristics5;
		this.roleStatus = roleStatus;
		this.roleGivenTo = roleGivenTo;
		this.roleGivenToID = roleGivenToID;
	}

	public long getFormId() {
		return formId;
	}

	public void setFormId(long formId) {
		this.formId = formId;
	}

	public long getUserRegisteredId() {
		return userRegisteredId;
	}

	public void setUserRegisteredId(long userRegisteredId) {
		this.userRegisteredId = userRegisteredId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getMovieDesc() {
		return movieDesc;
	}

	public void setMovieDesc(String movieDesc) {
		this.movieDesc = movieDesc;
	}

	public String getMovieStatus() {
		return movieStatus;
	}

	public void setMovieStatus(String movieStatus) {
		this.movieStatus = movieStatus;
	}

	public String getMovieGenre() {
		return movieGenre;
	}

	public void setMovieGenre(String movieGenre) {
		this.movieGenre = movieGenre;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getRoleDescription() {
		return roleDescription;
	}

	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}

	public String getCharacteristics1() {
		return characteristics1;
	}

	public void setCharacteristics1(String characteristics1) {
		this.characteristics1 = characteristics1;
	}

	public String getCharacteristics2() {
		return characteristics2;
	}

	public void setCharacteristics2(String characteristics2) {
		this.characteristics2 = characteristics2;
	}

	public String getCharacteristics3() {
		return characteristics3;
	}

	public void setCharacteristics3(String characteristics3) {
		this.characteristics3 = characteristics3;
	}

	public String getCharacteristics4() {
		return characteristics4;
	}

	public void setCharacteristics4(String characteristics4) {
		this.characteristics4 = characteristics4;
	}

	public String getCharacteristics5() {
		return characteristics5;
	}

	public void setCharacteristics5(String characteristics5) {
		this.characteristics5 = characteristics5;
	}

	public String getRoleStatus() {
		return roleStatus;
	}

	public void setRoleStatus(String roleStatus) {
		this.roleStatus = roleStatus;
	}

	public String getRoleGivenTo() {
		return roleGivenTo;
	}

	public void setRoleGivenTo(String roleGivenTo) {
		this.roleGivenTo = roleGivenTo;
	}

	public long getRoleGivenToID() {
		return roleGivenToID;
	}

	public void setRoleGivenToID(long roleGivenToID) {
		this.roleGivenToID = roleGivenToID;
	}

}
