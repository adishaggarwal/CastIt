
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert"


import axios from '../../../../axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useNavigate } from 'react-router-dom'
import Dropdown from "../../../../components/Dropdown/Dropdown";
import {
  lighten,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function Contact(props) {

  let roleStatusArr = [
    {
      value: "Active",
    },
    {
      value: "Closed",
    },
  ];

  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");

  const [formData,setformData]=useState(
    {
      "userRegisteredId":props.userRegisterationId,
      "movieName":"",
      "movieDesc":"",
      "movieGenre":"",
      "role":"",
      "roleDescription":"",
      "characteristic1":"",
      "characteristic2":"",
      "characteristic3":"",
      "characteristic4":"",
      "characteristic0":"",
      "roleStatus":"Active"
      }
  );

  const [errorState, seterrorState] = useState(
    {
      value1:true,
      value2:true,
      value3:true,
      value4:true,
      value0:true
      }
  );
  
  const [listLoader,setlistLoader]=useState(false);

  const [charData, setcharData] = useState(
    [
      {
        characteristic:"",
        value:""
      },
      {
        characteristic:"",
        value:""
      },
      {
        characteristic:"",
        value:""
      },
      {
        characteristic:"",
        value:""
      },
      {
        characteristic:"",
        value:""
      },
    ]
  );

  const useStyles22 = makeStyles((theme) => ({
    backdropLoader: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#0072C6',
    },
  }));
  const classes22 = useStyles22();
  

  // useEffect(() => {
    
  // }, [props.showForm]);

  useEffect(() => {
    
  }, [props.showError,props.showSuccess,props.showForm]);

  
  useEffect(() => {
    let result;
    if(props.showForm==="applyjob" || props.showForm==="editapplyjob")
    {
      if(props.showForm==="applyjob")
      {
      result = (props.applicantActivePosts).find((obj) => {
        return obj.formId === props.applicantUpdateFormId;
      });
    }
    else if(props.showForm==="editapplyjob")
    {
      result = (props.applicantAppliedPosts).find((obj) => {
        return obj.formId === props.applicantUpdateFormId;
      });
    }
      const formDataCopy={...formData};
      const charDataCopy=[...charData];

      
      formDataCopy["movieName"]=result.movieName;
      formDataCopy["movieDesc"]=result.movieDesc;
      formDataCopy["movieGenre"]=result.movieGenre;
      formDataCopy["role"]=result.role;
      formDataCopy["roleDescription"]=result.roleDescription;
      // formDataCopy["roleStatus"]=result.roleStatus;   //check
      for(let i=0;i<5;i++)
      {
        let charArr=(result["characteristics"+(i+1)]).split(",");
        charDataCopy[i].characteristic=charArr[0];
        if(props.showForm==="applyjob")
        {
        charDataCopy[i].value="";
        }
        else if(props.showForm==="editapplyjob")
        {
          charDataCopy[i].value=charArr[1];
        }
      }
      
      setcharData(charDataCopy);
      setformData(formDataCopy);
      if(props.showForm==="applyjob")
      {
      resetError(true);
      }
      if(props.showForm==="editapplyjob")
      {
      resetError(false);
      }
    }
  }, [props.applicantUpdateFormId]);

  const resetError=(val)=>{
    let resetError1={
      value1:val,
      value2:val,
      value3:val,
      value4:val,
      value0:val
      }
      seterrorState(resetError1);
  }

  // const resetForm=()=>{
  //   const formDataCopy={...formData};
  //     const charDataCopy=[...charData];

      
  //     formDataCopy["movieName"]="";
  //     formDataCopy["movieDesc"]="";
  //     formDataCopy["movieGenre"]="";
  //     formDataCopy["role"]="";
  //     formDataCopy["roleDescription"]="";
  //     // formDataCopy["roleStatus"]="Active";
  //     for(let i=0;i<5;i++)
  //     {
  //       charDataCopy[i].characteristic="";
  //       charDataCopy[i].value="";
  //     }
      
  //     setcharData(charDataCopy);
  //     setformData(formDataCopy);
  // }

  const setCharacteristic=(e,key,index)=>{
      const charDataCopy=[...charData];
      charDataCopy[index][key]=e.target.value;
      inputFormValidation(key+""+index,e.target.value);
      setcharData(charDataCopy);
  }


  const enablePost=()=>{
    let ans=false;
    for(let i=0;i<5;i++)
    {
      if(errorState["characteristic"+i])
      {
        ans=true;
        break;
      }
      if(errorState["value"+i])
      {
        ans=true;
        break;
      }
    }
    return (errorState.movieName || errorState.movieDesc || errorState.movieGenre || errorState.role || 
      errorState.roleDescription || ans);
    }

  const inputFormValidation=(key,value)=>{
    const errorData={...errorState};
    var splformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numformat= /^([^0-9]*)$/;

    if(key=="movieDesc" && value.trim()=='')
    {
      errorData[key]=true;
    }
   
    else if(key=="movieGenre" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="role" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="roleDescription" && value.trim()=='')
    {
      errorData[key]=true;
    }
    else if(key=="characteristic1" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="characteristic2" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="characteristic3" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="characteristic4" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="characteristic0" && (value.trim()=='' || splformat.test(value) || !numformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="value1" && (value.trim()=='' || splformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="value2" && (value.trim()=='' || splformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="value3" && (value.trim()=='' || splformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="value4" && (value.trim()=='' || splformat.test(value)))
    {
      errorData[key]=true;
    }
    else if(key=="value0" && (value.trim()=='' || splformat.test(value)))
    {
      errorData[key]=true;
    }
    else
    {
      errorData[key]=false;
    }

    seterrorState(errorData);
  }

  const handleformData=(e,key)=>{
    const formCopy={...formData};
    formCopy[key]=e.target.value;
    inputFormValidation(key,e.target.value);
    setformData(formCopy);
  }

  const closeAlert=()=>{
    setshowError(false);
    props.displayError(false,"");
  }
  const closeAlert2=()=>{
    setshowSuccess(false);
    props.displaySuccess(false,"");
  }

  const displayError=(msg)=>{
    // setshowError(true);
    props.displayError(true,msg);
    // seterrMsg(msg);
    const myTimeout = setTimeout(closeAlert, 5000);
  }

  const displaySuccess=(msg)=>{
    // setshowSuccess(true);
    // setsuccMsg(msg);
    props.displaySuccess(true,msg);
    const myTimeout = setTimeout(closeAlert2, 5000);
  }

//   {     "formId":"1", "userRegisteredId":"2", "characteristics1":"height in feet,5", "characteristics2":"weight in kg,56", "characteristics3":"nationality,indian", "characteristics4":"age,24", "characteristics5":"color,dark",

// "userEmail":"adivashishth15@gmail.com",  "userFirstName":"Adi",  "userLastName":"Vashishth" }

  const postRole=(key)=>{
    // applyjob" ? "Apply":(props.showForm==="editapplyjob
    let data=  {
      "userRegisteredId":props.userRegisterationId,
      "formId":props.applicantUpdateFormId,
      "characteristics1":charData[0].characteristic+ ","+charData[0].value,
      "characteristics2":charData[1].characteristic+ ","+charData[1].value,
      "characteristics3":charData[2].characteristic+ ","+charData[2].value,
      "characteristics4":charData[3].characteristic+ ","+charData[3].value,
      "characteristics5":charData[4].characteristic+ ","+charData[4].value,
      "userEmail":props.userEmail,
      "userFirstName":props.userFirstName,
      "userLastName":props.userLastName
      }

      let url= "/applicantportal/applyposting";


      if (key=="editapplyjob")
      {
        data.applicantFormId=props.applicantFormId;
        url="/applicantportal/updateapplication";
      }
      
    
    setlistLoader(true);
  axios.post(url, data).then((res) => {
    let errorMsg="";
    setlistLoader(false);
  if (res.data.error) {
  //toaster
  displayError(res.data.error);
  
      } else {
  props.setshowForm("none");
  displaySuccess(key=="editapplyjob"? "Role Updated successfully!!":"Role applied successfully!!");
  // props.setLoggedinUser(res.data.userRegisterationId,res.data.userEmail,res.data.userFirstName,res.data.userLastName,res.data.userDOB,res.data.userRegistereAs);
  props.fetchApplicantPosting();
  props.fetchApplicantAppliedPosting();

      }
    })
    .catch((error) => {
  displayError(error.message);  
    setlistLoader(false);
    }); 

  }
  
  return (
    <React.Fragment>
      <Backdrop className={classes22.backdropLoader} open={listLoader} >
                <CircularProgress color="inherit" />
                </Backdrop>
                {/* {props.showError ?<MKAlert closeFun={closeAlert} color="error" dismissible>{props.errormsg}</MKAlert>:null}
                {props.showSuccess ?<MKAlert closeFun={closeAlert2} color="success" dismissible>{props.succmsg}</MKAlert>:null} */}
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Land on your dream job by 3 easy steps
                    </MKTypography>
                    <div style={{marginTop: "50px"}}>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      <div style={{fontWeight: "bold"}}>1. Create your profile <br/></div>
                          Create your profile by signing up on the website to get casted directly by top directors.
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                    <div style={{fontWeight: "bold"}}>2. Apply to jobs <br/></div>
                      Apply to casting calls and auditions with a single click on the poster to start booking roles now!
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                    <div style={{fontWeight: "bold"}}>3. Get selected online <br/></div>
                        Land the role and make your mark by getting selected online!
                    </MKTypography>
                    </div>
                    {/* <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </MKTypography>
                    </MKBox> */}
                    {/* <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </MKTypography>
                    </MKBox> */}
                    {/* <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </MKTypography>
                    </MKBox> */}
                    {/* <MKBox mt={3}>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                    </MKBox> */}
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={0}>
                      {props.showForm==="applyjob" ? "Apply for new role!":(props.showForm==="editapplyjob" ? "Update Application!":null)}
                    </MKTypography>
                    {/* <MKTypography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </MKTypography> */}
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Name of the movie is"
                          placeholder="Movie Name"
                          disabled 
                          error={errorState.movieName}
                          value={formData.movieName}
                          onChange={(e)=>handleformData(e,"movieName")}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Movie Description"
                          disabled 
                          placeholder="Horror Comedy movie with ..."
                          value={formData.movieDesc}
                          error={errorState.movieDesc}
                          onChange={(e)=>handleformData(e,"movieDesc")}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Movie Genre"
                          placeholder="Horror Comedy"
                          disabled 
                          value={formData.movieGenre}
                          error={errorState.movieGenre}
                          onChange={(e)=>handleformData(e,"movieGenre")}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Movie Role"
                          placeholder="Actor"
                          value={formData.role}
                          disabled 
                          error={errorState.role}
                          onChange={(e)=>handleformData(e,"role")}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                      <MKInput
                          variant="standard"
                          label="Role Description"
                          placeholder="Need a muscular actor with good sense of humor"
                          value={formData.roleDescription}
                          disabled 
                          error={errorState.roleDescription}
                          onChange={(e)=>handleformData(e,"roleDescription")}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={2}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                      <MKInput
                          variant="standard"
                          label="Role Status"
                          disabled 
                          placeholder="Active"
                          value={formData.roleStatus}
                          // onChange={(e)=>handleformData(e,"roleStatus")}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                        </Grid>
                      {/* <Grid item xs={12} pr={1} mb={3}>
                        <Dropdown
                          value={props.queue.Type}
                          name="type"
                          onChange={(event) =>
                            props.inputChanged(props.queue.QueueId, "value", event)
                          }
                          array={roleStatusArr}
                          type="value"
                        />
                      </Grid> */}
                      
                      {charData.map((charItem, index) => {
                    return (
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          placeholder={"Characteristic"+(index+1)}
                          value={charItem.characteristic}
                          disabled 
                          error={errorState["characteristic"+index]}
                          InputLabelProps={{ shrink: true }}
                          // onChange={(e)=>setCharacteristic(e,'characteristic',index)}
                          size='small'
                        />
                        <MKInput
                          variant="standard"
                          placeholder={"Value"+(index+1)}
                          value={charItem.value}
                          InputLabelProps={{ shrink: true }}
                          error={errorState["value"+index]}
                          onChange={(e)=>setCharacteristic(e,'value',index)}
                          size='small'
                          marginLeft="5px"
                        />
                      </Grid>
                    );
                  })}
                      
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton disabled={enablePost()} onClick={()=>postRole(props.showForm)} variant="gradient" color="info">
                        {props.showForm==="applyjob" ? "Apply":(props.showForm==="editapplyjob" ? "Update" : null )}
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
    </React.Fragment>
  );
}


const mapStateToProps = (state) => {
  return {
    userRegisterationId: state.ScreenIt.userRegisterationId,
    showForm:state.ScreenIt.showForm,
    applicantUpdateFormId:state.ScreenIt.applicantUpdateFormId,
    applicantActivePosts: state.ScreenIt.applicantActivePosts,
    applicantAppliedPosts:state.ScreenIt.applicantAppliedPosts,
    applicantFormId:state.ScreenIt.applicantFormId,
    userEmail: state.ScreenIt.userEmail,
    userFirstName: state.ScreenIt.userFirstName,
    userLastName: state.ScreenIt.userLastName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    displayError: (value,msg) => dispatch(actions.displayError(value,msg)),
    displaySuccess: (value,msg) => dispatch(actions.displaySuccess(value,msg)),
    fetchApplicantPosting:()=>dispatch(actions.fetchApplicantPosting()),
    fetchApplicantAppliedPosting:()=>dispatch(actions.fetchApplicantAppliedPosting()),
    setLoggedinUser: (userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs) => dispatch(actions.setLoggedinUser(userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
