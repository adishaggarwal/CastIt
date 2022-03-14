package com.filmindustry.candidatescreening.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name= "CASTIT_APPLICANT_ROLE_FORM")
public class ApplicantPortal {
			
			@Column(name= "FORM_ID")
			private long formId;
			
			@Id 
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			@Column(name= "APPLICANT_FORM_ID")
			private long applicantFormId;
			
			@Column(name= "REGISTRATION_ID")
			private long userRegisteredId;
			
			@Column(name= "CHARACTERISTICS1")
			private String characteristics1;
			
			@Column(name= "CHARACTERISTICS2")
			private String characteristics2;
			
			@Column(name= "CHARACTERISTICS3")
			private String characteristics3;
			
			@Column(name= "CHARACTERISTICS4")
			private String characteristics4;
			
			@Column(name= "CHARACTERISTICS5")
			private String characteristics5;
			
			@Column(name= "PERCENTAGEMATCH")
			private String percentageMatch;
			
			@OneToOne(mappedBy = "applicantPortal")
			private DirectorPortal directorPortal;
//			private List<DirectorPortal> directorPortal ;
//			
			public ApplicantPortal() {
				// TODO Auto-generated constructor stub
			}

			public ApplicantPortal(long userRegisteredId, long formId, String roleDescription, String characteristics1, String characteristics2,
					String characteristics3, String characteristics4, String characteristics5) {
				super();
				this.formId=formId;
				this.userRegisteredId = userRegisteredId;
				this.characteristics1 = characteristics1;
				this.characteristics2 = characteristics2;
				this.characteristics3 = characteristics3;
				this.characteristics4 = characteristics4;
				this.characteristics5 = characteristics5;
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

			public long getApplicantFormId() {
				return applicantFormId;
			}

			public void setApplicantFormId(long applicantFormId) {
				this.applicantFormId = applicantFormId;
			}

			public String getPercentageMatch() {
				return percentageMatch;
			}

			public void setPercentageMatch(String percentageMatch) {
				this.percentageMatch = percentageMatch;
			}

			public DirectorPortal getDirectorPortal() {
				return directorPortal;
			}

			public void setDirectorPortal(DirectorPortal directorPortal) {
				this.directorPortal = directorPortal;
			}

}