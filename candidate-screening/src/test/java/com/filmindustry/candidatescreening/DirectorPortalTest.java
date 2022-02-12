package com.filmindustry.candidatescreening;

import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;

import com.filmindustry.candidatescreening.bean.DirectorPortalBean;
import com.filmindustry.candidatescreening.repository.DirectorPortalRepositoryInterface;

@TestMethodOrder(OrderAnnotation.class)
public class DirectorPortalTest extends CandidateScreeningApplicationTests{
	@Autowired
	private DirectorPortalRepositoryInterface DPRInterface;
	DirectorPortalBean DPB;
	DirectorPortalTest()
	{
		DPB= new DirectorPortalBean(1, "ABC", "ABC Desc", "Active",
				"Comedy", "Actor", "Actor Desc", "Height in feet 5", "Weight in kg 50",
				"Gender male", "Nationality Indian", "Color dark", "Active",
				"", 0);
	}
}
