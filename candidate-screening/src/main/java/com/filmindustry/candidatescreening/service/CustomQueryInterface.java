package com.filmindustry.candidatescreening.service;

public interface CustomQueryInterface {

	public  String USER_DOB = "";
	public  String USER_EMAIL = "";
	public  String USER_FIRST_NAME = "";
	public  String USER_LAST_NAME = "";
	public  long APPLICANT_FORM_ID = 0;
	public  String CHARACTERISTICS1 = "";
	public  String CHARACTERISTICS2 = "";
	public  String CHARACTERISTICS3 = "";
	public  String CHARACTERISTICS4 = "";
	public  String CHARACTERISTICS5 = "";
	public  String PERCENTAGEMATCH = "";
	
	public String getUSER_DOB();
	public String getUSER_EMAIL();
	public String getUSER_FIRST_NAME();
	public String getUSER_LAST_NAME();
	public long getAPPLICANT_FORM_ID();
	public String getCHARACTERISTICS1();
	public String getCHARACTERISTICS2();
	public String getCHARACTERISTICS3();
	public String getCHARACTERISTICS4();
	public String getCHARACTERISTICS5();
	public String getPERCENTAGEMATCH();
}
