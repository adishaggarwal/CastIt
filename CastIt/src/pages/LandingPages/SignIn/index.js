/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState } from "react";
import {
  lighten,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useNavigate } from 'react-router-dom';

// import { Redirect } from 'react-router-dom'

import * as actions from '../../../store/index';

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import classes from "./index.module.css";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import logo from "assets/images/logo.PNG";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKAlert from "components/MKAlert"
import axios from '../../../axios'

// Material Kit 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
// import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic(props) {
  const [asDirector, setasDirector] = useState(false);
  const [signInState, setsignInState] = useState(true);
  const [forgotPwdState, setforgotPwdState] = useState(false);
  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");
  // const [loggedin, setloggedin] = useState(false);
const [listLoader,setlistLoader]=useState(false);
const theme = useTheme();
const navigate = useNavigate();
const dateform=['month','day','year'];
const currDate=new Date();

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const pwdFormat = `
Must contain 1 digit, 1 special character, 1 upper case and , 1 lower case alphabet
and must be minimum 8 and maximum 15 characters long
`;

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': "*",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

 
  const [signupData, setsignupData] = useState(
    {
      firstName:"",
      lastName:"",
      dob:"",
      email:"",
      password:"",
      confirmPassword:"",
      email2:""
    }
  );
  const [errorState, seterrorState] = useState(
    {
      firstName:true,
      lastName:true,
      email:true,
      password:true,
      confirmPassword:true,
      dob:false,
      email2:true
    }
  );
  const [signinData, setsigninData] = useState(
    {
      email:"",
      password:""
    }
  );

  const useStyles22 = makeStyles((theme) => ({
    backdropLoader: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#0072C6',
    },
  }));
  const classes22 = useStyles22();

  const handlesetasDirector = () => setasDirector(!asDirector);
  const handleSignup = () => setsignInState(!signInState);

  const handleForgotPwd = () => setforgotPwdState(!forgotPwdState);

  const inputFormValidation=(key,value)=>{
    let lastNameFormat=/^[a-zA-Z]+$/;
    let nameFormat=/^[a-zA-Z]{3,}$/;
    let emailFormat=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let passwordFormat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/
    const errorData={...errorState};
    if(key=="firstName" && !nameFormat.test(value))
    {
      errorData[key]=true;
    }
    else if(key=="lastName" && (!lastNameFormat.test(value) && value.trim()!=''))
    {
      errorData[key]=true;
    }
    else if(key=="email" && !emailFormat.test(value))
    {
      errorData[key]=true;
    }
    else if(key=="email2" && !emailFormat.test(value))
    {
      errorData[key]=true;
    }
    else if(key=="password" && !passwordFormat.test(value))
    {
      errorData[key]=true;
    }
    else if(key=="confirmPassword" && signupData.password != value)
    {
      errorData[key]=true;
    }
    else
    {
      errorData[key]=false;
    }

    seterrorState(errorData);


  }

  const handleSignupInputs = (e,key) => {
    var value=e.target.value;
    const signupState={...signupData};
    inputFormValidation(key,value);
    signupState[key]=value;
    setsignupData(signupState);
  }

  const handleSignInputs = (e,key) => {
    var value=e.target.value;
    const signinState={...signinData};
    signinState[key]=value;
    setsigninData(signinState);
  }

  const closeAlert=()=>{
    setshowError(false);
  }
  const closeAlert2=()=>{
    setshowSuccess(false);
  }

  const displayError=(msg)=>{
    setshowError(true);
    seterrMsg(msg);
    const myTimeout = setTimeout(closeAlert, 5000);
  }

  const displaySuccess=(msg)=>{
    setshowSuccess(true);
    setsuccMsg(msg);
    const myTimeout = setTimeout(closeAlert2, 5000);
  }


  const routeChange = (val) =>{ 
    navigate('/'+val);
  }
  // {
  //   "userEmail":"abc1d@gmail.com",
  //   "userFirstName":"hvjgj",
  //   "userLastName":"hvhvj",
  //   "userDOB":"11/18/2021",
  //   "userRegistereAs":"Applicant",
  //   "userPassword":"!Abc1234567"
  //   }
  const submitSignupForm = (e) => {
    
      let dates=(signupData.dob).split("-");
      let mm=dates[1];
      let dd=dates[2];
      let yy=dates[0];
      let finalDate=mm+"/"+dd+"/"+yy;
    

    let data={
      "userEmail":""+signupData.email,
      "userFirstName":""+signupData.firstName,
      "userLastName":""+signupData.lastName,
      "userDOB":finalDate, //"11/18/2021"
      "userRegistereAs":asDirector ? "Director":"Applicant",
      "userPassword":""+signupData.password
      }

      // let data={
      //   "userEmail":"abc1d@gmail.com",
      //   "userFirstName":"hvjgj",
      //   "userLastName":"hvhvj",
      //   "userDOB":"11/18/2021",
      //   "userRegistereAs":"Applicant",
      //   "userPassword":"!Abc1234567"
      //   };
      setlistLoader(true);

    axios.post("/userdetails/adduser", data).then((res) => {
      let errorMsg="";
      setlistLoader(false);
      

    if (res.data.error) {
    //toaster
    displayError(res.data.error);
    
        } else {
    
    displaySuccess("User Account created successfully!!");
        }
      })
      .catch((error) => {
        displayError(error.message);
      setlistLoader(false);
      });
  }


  const submitForgotPassword = (e) => {
    let data=  {
      "userEmail":""+signupData.email2,
      // "userPassword":""+signinData.password
      }
      // {
      //   "userEmail":"abc1d@gmail.com",
      //   "userPassword":"!Abc1234567"
      //   }
    
    setlistLoader(true);

  axios.post("/userdetails/forgot", data).then((res) => {
    let errorMsg="";
    setlistLoader(false);
  if (res.data.error) {
  //toaster
  displayError(res.data.error);
  
      } else {
  
  // displaySuccess("User Account created successfully!!");
  displaySuccess("Email has been sent!");
 
  
      }
    })
    .catch((error) => {
      displayError(error.message);
    setlistLoader(false);
    });
  }




  const submitSigninForm = (e) => {
    let data=  {
      "userEmail":""+signinData.email,
      "userPassword":""+signinData.password
      }
      // {
      //   "userEmail":"abc1d@gmail.com",
      //   "userPassword":"!Abc1234567"
      //   }
    
    setlistLoader(true);

  axios.post("/userdetails/checkuser", data).then((res) => {
    let errorMsg="";
    setlistLoader(false);
  if (res.data.error) {
  //toaster
  displayError(res.data.error);
  
      } else {
  
  // displaySuccess("User Account created successfully!!");
  props.setLoggedinUser(res.data.userRegisterationId,res.data.userEmail,res.data.userFirstName,res.data.userLastName,res.data.userDOB,res.data.userRegistereAs);
  if(res.data.userRegistereAs=="Applicant")
  {
  props.setloginApplicant(true);
  }
  if(res.data.userRegistereAs=="Director")
  {
  props.setloginDirector(true);
  }
  const myTimeout = setTimeout(routeChange(res.data.userRegistereAs), 500);
  
      }
    })
    .catch((error) => {
      displayError(error.message);
    setlistLoader(false);
    });
  }



  const SignUpJsx =(
    <React.Fragment>
        <MKBox
                  variant="gradient"
                  style={{backgroundColor:"#dd864a"}}
                  borderRadius="lg"
                  coloredShadow="info"
                  mx={2}
                  mt={-4}
                  p={2}
                  mb={1}
                  textAlign="center"
                >
                  <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                    Sign Up
                  </MKTypography>
              </MKBox>
    <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                <MKBox mb={2}>
                  <MKInput error={errorState.firstName} success={!errorState.firstName} onChange={(e)=>handleSignupInputs(e,"firstName")} type="text" label="First Name" value={signupData.firstName} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                  <MKInput error={errorState.lastName} success={!errorState.lastName} onChange={(e)=>handleSignupInputs(e,"lastName")} type="text" label="Last Name" value={signupData.lastName} fullWidth />
                  </MKBox>
                <MKBox mb={2}>
                  <MKInput views={dateform} maxDate={currDate} onChange={(e)=>handleSignupInputs(e,"dob")} type="date" label="" value={signupData.dob} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput error={errorState.email} success={!errorState.email} onChange={(e)=>handleSignupInputs(e,"email")} type="email" label="Email" value={signupData.email} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                  <Tooltip title={pwdFormat}>
                    <MKInput error={errorState.password} success={!errorState.password} onChange={(e)=>handleSignupInputs(e,"password")} type="password" label="Password" value={signupData.password} fullWidth />
                  </Tooltip>
                  </MKBox>
                  <MKBox mb={2}>
                  <Tooltip title={pwdFormat}>
                    <MKInput error={errorState.confirmPassword} success={!errorState.confirmPassword} onChange={(e)=>handleSignupInputs(e,"confirmPassword")} type="password" label="Confirm Password" value={signupData.confirmPassword} fullWidth />
                  </Tooltip>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={asDirector} onChange={handlesetasDirector} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handlesetasDirector}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Sign Up as Director
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton disabled={errorState.firstName || errorState.lastName || errorState.dob || errorState.email || errorState.password || errorState.confirmPassword}
                     onClick={submitSignupForm} variant="gradient" color="info" fullWidth>
                      sign Up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                  <MKTypography variant="button" color="text">
                    Already have an account?{" "}
                      <div role="button" onClick={handleSignup}><MKTypography
                        // component={Link}
                        // to="/"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign In
                      </MKTypography>
                      </div>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
              </React.Fragment>
  )

  const SignInJsx =(
    <React.Fragment>
    <MKBox
                variant="gradient"
                style={{backgroundColor:"#dd864a"}}
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-4}
                p={3}
                mb={4}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
              </MKBox>
    <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignInputs(e,"email")} type="email" value={signinData.email} label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignInputs(e,"password")} type="password" value={signinData.password} label="Password" fullWidth />
                  </MKBox>
                  {/* <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={asDirector} onChange={handlesetasDirector} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handlesetasDirector}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Login as Director
                    </MKTypography>
                  </MKBox> */}
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={submitSigninForm} variant="gradient" color="info" fullWidth>
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <div role="button"
                      className={classes.ForgotBttn}
                      onClick={handleForgotPwd}>
                      <MKTypography variant="button" color="text">
                        Forgot Password?{" "}
                       </MKTypography> 
                    </div>
                    
                      <div role="button"  
                      onClick={handleSignup}><MKTypography
                        // component={Link}
                        // to="/"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                      </div>
                    {/* </MKTypography> */}
                  </MKBox>
                </MKBox>
              </MKBox>
              </React.Fragment>
  )

  const ForgotPwdJsx = (
    <React.Fragment>
            <MKBox
                variant="gradient"
                style={{backgroundColor:"#dd864a"}}
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-4}
                p={3}
                mb={4}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Recover Password
                </MKTypography>
            </MKBox>
    <MKBox pt={4} pb={3} px={3}>
      <MKBox component="form" role="form">
        <MKBox mb={2}>
          <MKInput error={errorState.email2} success={!errorState.email2} onChange={(e)=>handleSignupInputs(e,"email2")} type="email" label="Email" value={signupData.email2} fullWidth />
        </MKBox>
        {/* <MKBox mb={2}>
          <MKInput error={errorState.password} success={!errorState.password} onChange={(e)=>handleSignupInputs(e,"password")} type="password" label="New Password" value={signupData.password} fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput error={errorState.confirmPassword} success={!errorState.confirmPassword} onChange={(e)=>handleSignupInputs(e,"confirmPassword")} type="password" label="Confirm Password" value={signupData.confirmPassword} fullWidth />
        </MKBox> */}
        <MKBox mt={4} mb={1}>
          <MKButton disabled={errorState.email2}
            onClick={submitForgotPassword} variant="gradient" color="info" fullWidth>
            Send password
          </MKButton>
        </MKBox>
      </MKBox>
  </MKBox>
  </React.Fragment>
  )

  return (
    <>
    <Backdrop className={classes22.backdropLoader} open={listLoader} >
                <CircularProgress color="inherit" />
                </Backdrop>
                {showError ?<MKAlert closeFun={closeAlert} color="error" dismissible>{errMsg}</MKAlert>:null}
                {showSuccess ?<MKAlert closeFun={closeAlert2} color="success" dismissible>{succMsg}</MKAlert>:null}
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      /> */}
      {/* <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      /> */}
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          {/* <Grid item xs={11} sm={9} md={5} lg={4} xl={3}> */}
            <Card style={{ width: '360px' }}>
              {forgotPwdState? ForgotPwdJsx : (signInState ? SignInJsx : SignUpJsx) }
              {/* {signInState ? SignInJsx : ForgotPwdJsx} */}
            </Card>
          {/* </Grid> */}
        </Grid>
      </MKBox>
      {/* <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox> */}
    </>
  );
}



// const mapStateToProps = (state) => {
//   return {
//     jobList: state.job.scheduleList,
//     sessionId: state.auth.sessionId,
//     cabinetName: state.auth.cabinetName,
//     appServerType: state.auth.appServerType,
//     serverIP: state.auth.serverIP,
//     serverPort: state.auth.serverPort,
//     jobNameList:state.job.jobNameList
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedinUser: (userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs) => dispatch(actions.setLoggedinUser(userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs)),
    setloginApplicant: (value) => dispatch(actions.setloginApplicant(value)),
    setloginDirector: (value) => dispatch(actions.setloginDirector(value))
  };
};

export default connect(null, mapDispatchToProps)(SignInBasic);