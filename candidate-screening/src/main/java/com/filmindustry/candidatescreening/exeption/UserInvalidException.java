package com.filmindustry.candidatescreening.exeption;

public class UserInvalidException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	public UserInvalidException(String Message)
	{
		super(Message);
	}

}
