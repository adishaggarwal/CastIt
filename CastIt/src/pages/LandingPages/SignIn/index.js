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
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import { Redirect } from 'react-router-dom'

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
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
  // const [loggedin, setloggedin] = useState(false);
const [listLoader,setlistLoader]=useState(false);
const theme = useTheme();
const navigate = useNavigate();


 
  const [signupData, setsignupData] = useState(
    {
      firstName:"",
      lastName:"",
      dob:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  );
  const [errorState, seterrorState] = useState(
    {
      firstName:"",
      lastName:"",
      dob:"",
      email:"",
      password:"",
      confirmPassword:""
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

  const inputFormValidation=(key,value)=>{
    nameFormat=/^[a-zA-Z]+$/;
    if(key=="firstName" && nameFormat.test(value))
    {
      
    }
  }

  const handleSignupInputs = (e,key) => {
    var value=e.target.value;
    const signupState={...signupData};
    signupState[key]=value;
    setsignupData(signupState);
  }

  const handleSignInputs = (e,key) => {
    var value=e.target.value;
    const signinState={...signinData};
    signinState[key]=value;
    setsigninData(signinState);
  }

  const routeChange = () =>{ 
    navigate('/CastIt');
  }

  const submitSignupForm = (e) => {
    let data={
      "userEmail":""+signupData.email,
      "userFirstName":""+signupData.firstName,
      "userLastName":""+signupData.lastName,
      "userDOB":""+signupData.dob, //"11/18/2021"
      "userRegistereAs":asDirector ? "Director":"Applicant",
      "userPassword":""+signupData.password
      }
      setlistLoader(true);
    axios.post("Signup", data).then((res) => {
      let errorMsg="";
      setlistLoader(false);
    if(res.data.errorMessage)
    {
       errorMsg= res.data.errorMessage ==="" ? "Some error occurred" : res.data.errorMessage;
    }
    else
    {
      errorMsg= "Some error occurred";
    }

    // if (res.data.errorMessage === t("INVALID_SESSION") || res.data.Description === "Invalid Session!") {
    //  let message = t("INVALID_SESSION");
    //       props.showErrorPage(message, true);
    //   setErrorMessage(t("INVALID_SESSION"));
    //   setErrBool(true);
    // }
    //   else if (res.data.Status!==0) {
    //     setErrorMessage(errorMsg);
    //     setErrBool(true);
    //     }
    //    else if (res.data.mbError) {
    //     setErrorMessage(errorMsg);
    //     setErrBool(true);
    //     } else {
    //       let listData=[];
    //       let arr=[];
          
          
    //         props.setJobList1(listData);
    //         props.setJobNameList(arr);
    //     }
      })
      .catch((error) => {
        // setErrorMessage(error);
      setlistLoader(false);
      });
  }


  const submitSigninForm = (e) => {
    let data=  {
        "userEmail":""+signinData.email,
        "userPassword":""+signinData.password
        }
        setlistLoader(true);
        routeChange();
        axios.post("Signup", data).then((res) => {
          let errorMsg="";
          setlistLoader(false);
          
        if(res.data.errorMessage)
        {
           errorMsg= res.data.errorMessage ==="" ? "Some error occurred" : res.data.errorMessage;
        }
        else
        {
          errorMsg= "Some error occurred";
        }
    
        // if (res.data.errorMessage === t("INVALID_SESSION") || res.data.Description === "Invalid Session!") {
        //  let message = t("INVALID_SESSION");
        //       props.showErrorPage(message, true);
        //   setErrorMessage(t("INVALID_SESSION"));
        //   setErrBool(true);
        // }
        //   else if (res.data.Status!==0) {
        //     setErrorMessage(errorMsg);
        //     setErrBool(true);
        //     }
        //    else if (res.data.mbError) {
        //     setErrorMessage(errorMsg);
        //     setErrBool(true);
        //     } else {
        //       let listData=[];
        //       let arr=[];
              
              
        //         props.setJobList1(listData);
        //         props.setJobNameList(arr);
        //     }
          })
          .catch((error) => {
            // setErrorMessage(error);
          setlistLoader(false);
          });
  }



  const SignUpJsx =(
    
    <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                <MKBox mb={2}>
                  <MKInput onChange={(e)=>handleSignupInputs(e,"firstName")} type="text" label="First Name" value={signupData.firstName} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                  <MKInput onChange={(e)=>handleSignupInputs(e,"lastName")} type="text" label="Last Name" value={signupData.lastName} fullWidth />
                  </MKBox>
                <MKBox mb={2}>
                  <MKInput onChange={(e)=>handleSignupInputs(e,"dob")} type="date" label="" value={signupData.dob} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignupInputs(e,"email")} type="email" label="Email" value={signupData.email} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignupInputs(e,"password")} type="password" label="Password" value={signupData.password} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignupInputs(e,"confirmPassword")} type="password" label="Confirm Password" value={signupData.confirmPassword} fullWidth />
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
                    <MKButton onClick={submitSignupForm} variant="gradient" color="info" fullWidth>
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
  )

  const SignInJsx =(
    <React.Fragment>
    <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
    <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignInputs(e,"email")} type="email" value={signinData.email} label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput onChange={(e)=>handleSignInputs(e,"password")} type="password" value={signinData.password} label="Password" fullWidth />
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
                      &nbsp;&nbsp;Login as Director
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={submitSigninForm} variant="gradient" color="info" fullWidth>
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <div role="button" onClick={handleSignup}><MKTypography
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
                    </MKTypography>
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
      <MKBox
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
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              {signInState ? SignInJsx : SignUpJsx}
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
