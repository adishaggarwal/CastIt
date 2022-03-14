package com.filmindustry.candidatescreening.serviceimpl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.filmindustry.candidatescreening.bean.UserDetailsBean;
import com.filmindustry.candidatescreening.functionclasses.PasswordEncDec;
import com.filmindustry.candidatescreening.model.UserDetails;
import com.filmindustry.candidatescreening.repository.UserDetailsRepositoryInterface;
import com.filmindustry.candidatescreening.service.UserDetailsServiceInterface;

@Service
public class UserDetailsService implements UserDetailsServiceInterface 
{

	@Autowired
	private UserDetailsRepositoryInterface UDJPArespositoryInter;
	@Override
	public UserDetailsBean saveUsers(UserDetailsBean user) 
	{
		UserDetailsBean bean=null;
		UserDetails entity=null; 
		String patternChecker="";
		boolean match;
	    
		try
		{
			//For first name and last name
			patternChecker=user.getUserFirstName();
		    match=Pattern.matches("[a-zA-Z]+", patternChecker);
			if(!match)
				return new UserDetailsBean("First Name cannot contain Numbers, Special Characters and Spaces");
			patternChecker=user.getUserLastName();
			match=Pattern.matches("[a-zA-Z]+", patternChecker);
			if(!match)
				return new UserDetailsBean("Last Name cannot contain Numbers, Special Characters and Spaces");
		    
			//For Date
			patternChecker=user.getUserDOB();
			SimpleDateFormat sdfrmt = new SimpleDateFormat("MM/dd/yyyy");
			sdfrmt.setLenient(false);
			try
		    {
		        Date javaDate = sdfrmt.parse(patternChecker); 
		    }
		    catch (ParseException e)
		    {
		        return new UserDetailsBean("Invalid date format. Only MM/dd/yyyy is allowed");
		    }
			
			//For Password
			patternChecker=user.getUserPassword();
			match=Pattern.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,15}$", patternChecker);
			if(!match)
				return new UserDetailsBean("Password must be minimum 8 and maximum 15 characters long and contain at least one digit, one lowercase, one uppercase, one special character");
		   
			PasswordEncDec ped=new PasswordEncDec();
	        String encryptedPassword=ped.encrypt(patternChecker);
	        user.setUserPassword(encryptedPassword);
			
	        entity=new UserDetails();
		    bean=new UserDetailsBean();
			BeanUtils.copyProperties(user, entity);
			UserDetails savedData=UDJPArespositoryInter.save(entity);
			BeanUtils.copyProperties(savedData, bean);
		}
		catch (DataIntegrityViolationException  e)
		{
			//e.printStackTrace();
			bean=null;
			entity=null;
			return new UserDetailsBean("Email Already Exists");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
		}
		return bean;
	}
	
	
	public UserDetailsBean loginUsers(String email, String password) {
		UserDetailsBean bean=null;
		UserDetails entity=null;
		try
		{
			if (email == "" || password=="")
				return new UserDetailsBean("Email and password cannot be empty");
			entity=new UserDetails();
		    bean=new UserDetailsBean();
		    entity.setUserEmail(email);
		    entity.setUserPassword(password);
			UserDetails selectData=UDJPArespositoryInter.findByUserEmail(entity.getUserEmail());
			if (selectData == null)
				return new UserDetailsBean("Invalid Email ID");
		
			BeanUtils.copyProperties(selectData, bean);
			
			PasswordEncDec ped=new PasswordEncDec();
	        String decryptedPassword=ped.decrypt(bean.getUserPassword());
	        if (!decryptedPassword.equals(password))
	        	return new UserDetailsBean("Invalid Password");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
			return new UserDetailsBean("Some Error Occured from application","Failure");	
		}
		bean.setMessage("Success");
		return bean;
	}


	@Override
	public UserDetailsBean deleteUser(long id) {
		UserDetails entity=null;
		
		try
		{
			
			entity=new UserDetails();
		    entity.setUserRegisterationId(id);
		    UDJPArespositoryInter.deleteById(entity.getUserRegisterationId());
		}
		catch(EmptyResultDataAccessException e)
		{
			entity=null;
			UserDetailsBean bean=new UserDetailsBean("UserId does not exist","Failure");
			bean.setUserRegisterationId(id);
			return bean;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			entity=null;
		}
		UserDetailsBean bean=new UserDetailsBean(null, "Success");
		bean.setUserRegisterationId(id);
		return bean;
	}


	@Override
	public UserDetailsBean updateUser(String email,UserDetailsBean user) {
		UserDetailsBean bean=null;
		UserDetails entity=null; 
		String patternChecker="";
		boolean match;
	    
		try
		{
			//For first name and last name
			patternChecker=user.getUserFirstName();
		    match=Pattern.matches("[a-zA-Z]+", patternChecker);
			if(!match)
				return new UserDetailsBean("First Name cannot contain Numbers, Special Characters and Spaces");
			patternChecker=user.getUserLastName();
			match=Pattern.matches("[a-zA-Z]+", patternChecker);
			if(!match)
				return new UserDetailsBean("Last Name cannot contain Numbers, Special Characters and Spaces");
		    
			//For Date
			patternChecker=user.getUserDOB();
			SimpleDateFormat sdfrmt = new SimpleDateFormat("MM/dd/yyyy");
			sdfrmt.setLenient(false);
			try
		    {
		        Date javaDate = sdfrmt.parse(patternChecker); 
		    }
		    catch (ParseException e)
		    {
		        return new UserDetailsBean("Invalid date format. Only MM/dd/yyyy is allowed");
		    }
			
			//For Password
			patternChecker=user.getUserPassword();
			match=Pattern.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,15}$", patternChecker);
			if(!match)
				return new UserDetailsBean("Password must be minimum 8 and maximum 15 characters long and contain at least one digit, one lowercase, one uppercase, one special character");
		   
			PasswordEncDec ped=new PasswordEncDec();
	        String encryptedPassword=ped.encrypt(patternChecker);
	        user.setUserPassword(encryptedPassword);
			
			UserDetails previousData=UDJPArespositoryInter.findByUserEmail(email);
			previousData.setUserDOB(user.getUserDOB());
			//previousData.setUserEmail(user.getUserEmail());
			previousData.setUserFirstName(user.getUserFirstName());
			previousData.setUserLastName(user.getUserLastName());
			previousData.setUserPassword(user.getUserPassword());
			previousData.setUserRegistereAs(user.getUserRegistereAs());
			UserDetails savedData=UDJPArespositoryInter.save(previousData);
			bean=new UserDetailsBean();
			BeanUtils.copyProperties(savedData, bean);
		}
		
		catch (Exception e)
		{
			e.printStackTrace();
			bean=null;
			entity=null;
		}
		return bean;
	}



}
