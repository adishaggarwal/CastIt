package com.filmindustry.candidatescreening;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.filmindustry.candidatescreening.bean.UserDetailsBean;
import com.filmindustry.candidatescreening.model.UserDetails;
import com.filmindustry.candidatescreening.repository.UserDetailsRepositoryInterface;

@TestMethodOrder(OrderAnnotation.class)
public class UserDetailsTest extends CandidateScreeningApplicationTests{
	@Autowired
	UserDetailsRepositoryInterface UserDetailsRepositoryInterface;	
	int randomNo;
	UserDetailsBean UserDetailsBeanTest;
	static long userId;
	static String userEmail;
	static String userName;

	UserDetailsTest()
	{
		randomNo= (int) ((Math.random() * (1000 - 2)) + 2);
		UserDetailsBeanTest= new UserDetailsBean("abc"+randomNo+"@abc.com","!Abc123456","abc","def","12/23/1996","Director");
	}
	
	@Test
	@Order(1)
	public void userDetailsSave() {
		UserDetails UserDetailsEntityTest= new UserDetails();
		BeanUtils.copyProperties(UserDetailsBeanTest, UserDetailsEntityTest);
		UserDetails savedDataEntity=UserDetailsRepositoryInterface.save(UserDetailsEntityTest);
		userId=(long) savedDataEntity.getUserRegisterationId();
		userEmail=savedDataEntity.getUserEmail();
		userName=savedDataEntity.getUserFirstName();
		UserDetailsBeanTest.setUserRegisterationId(savedDataEntity.getUserRegisterationId());
		assertNotNull(UserDetailsRepositoryInterface.findByUserRegisterationId(UserDetailsBeanTest.getUserRegisterationId()));
	}
	
	@Test
	@Order(2)
	public void userDetailsRead() {
		List<UserDetails> list=UserDetailsRepositoryInterface.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	@Order(3)
	public void userDetailsReadOne() {
		//System.out.println(UserDetailsBeanTest.getUserRegisterationId());
		UserDetails checkOne=UserDetailsRepositoryInterface.findByUserRegisterationId(userId);
		//System.out.println(checkOne.getUserEmail());
		UserDetailsBean UD=new UserDetailsBean();
		UD.setUserEmail(checkOne.getUserEmail());
		assertEquals(userEmail, UD.getUserEmail());
	}
	
	@Test
	@Order(4)
	public void userDetailsUpdate() {
		UserDetails checkOne=UserDetailsRepositoryInterface.findByUserRegisterationId(userId);
		UserDetailsBean UD=new UserDetailsBean();
		BeanUtils.copyProperties(checkOne, UD);
		UD.setUserFirstName("abcabcabca");
		checkOne.setUserFirstName(UD.getUserFirstName());
		UserDetailsRepositoryInterface.save(checkOne);
		assertNotEquals(userName, UserDetailsRepositoryInterface.findByUserRegisterationId(userId).getUserFirstName());
	}
	
	@Test
	@Order(5)
	public void userDetailsDelete() {
		UserDetailsRepositoryInterface.deleteById(userId);
		assertThat(UserDetailsRepositoryInterface.existsById(userId)).isFalse();
	}
}
