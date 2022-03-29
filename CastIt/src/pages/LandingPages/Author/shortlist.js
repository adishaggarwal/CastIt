import React, { useState,useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MKButton from "components/MKButton";
//import { withStyles} from "@material-ui/core/styles";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Backdrop from '@material-ui/core/Backdrop';
import MKAlert from "components/MKAlert";
import MKInput from "components/MKInput";


import Accordian from "components/Accordian/Accordian";
import Accordian2 from "components/Accordian/Accordian2";

import {
  lighten,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Footer from "pages/LandingPages/Author/sections/Footer";
import SimpleFooter from "examples/Footers/SimpleFooter";
import Contact2 from "pages/LandingPages/Author/sections/Contact2";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";
import dashBoardImage from "assets/images/Director-Dashboard.jpg";
import bg4 from "assets/images/bg4.jpg";
import bg5 from "assets/images/bg5.jpg";
import bg6 from "assets/images/bg6.jpg";
import bg7 from "assets/images/bg7.jpg";
import bg8 from "assets/images/bg8.jpg";
import bg9 from "assets/images/bg9.jpg";
import bg10 from "assets/images/bg10.jpg";

import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../store/index';
import axios from '../../../axios';
import MKTypography from "components/MKTypography";
import classes from "./shortlist.module.css";
import { textAlign } from "@mui/system";
import boxShadow from "assets/theme/functions/boxShadow";
import { NoEncryption } from "@mui/icons-material";


function Shortlist(props) {

  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");
  const [listLoader,setlistLoader]=useState(false);
  const [accordianArray,setaccordianArray]=useState(
    []
  );

  const [formData,setformData]=useState(
    {
      percentage:0
      }
  );

  const [errorState, seterrorState] = useState(
    {
      percentage:false
      }
  );

  const useStyles22 = makeStyles((theme) => ({
    backdropLoader: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#0072C6',
    },
  }));
  const classes22 = useStyles22();
  useEffect(() => {
  props.getmatchedCandidates();
  props.getShortlistedCandidates();
  }, []);

  useEffect(() => {
    
    }, [props.matchedCandidates,props.shortlistedCandidates]);
  // useEffect(() => {
  //   setshowError(props.showError);
  // seterrMsg(props.errormsg);
  // setlistLoader(props.listLoader);
  //   }, [props.showError,props.listLoader,props.errormsg]);

  const displayError=(msg)=>{
    setshowError(true);
    seterrMsg(msg);
    const myTimeout = setTimeout(closeAlert, 5000);
  }

  const inputFormValidation=(key,value)=>{
    const errorData={...errorState};
    var splformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numformat= /^([^0-9]*)$/;
    let perc=value.trim();

    if(key=="percentage" && (numformat.test(perc) || (perc<0 || perc>100) ))
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
    props.setpercentage(e.target.value);
  }
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const displaySuccess=(msg)=>{
    setshowSuccess(true);
    setsuccMsg(msg);
    const myTimeout = setTimeout(closeAlert2, 5000);
  }

  const closeAlert=()=>{
    setshowError(false);
  }
  const closeAlert2=()=>{
    setshowSuccess(false);
  }


  return (
    <>
    <Backdrop className={classes22.backdropLoader} open={listLoader} >
                <CircularProgress color="inherit" />
                </Backdrop>
                {showError || props.showError ?<MKAlert closeFun={closeAlert} color="error" dismissible>{showError?errMsg:props.errormsg}</MKAlert>:null}
                {showSuccess || props.showSuccess ?<MKAlert closeFun={closeAlert2} color="success" dismissible>{showSuccess?succMsg:props.succmsg}</MKAlert>:null}
         

                


        <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.1),
                rgba(gradients.dark.state, 0.1)
              )}, url(${bg7})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        /> 
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
         <Profile />
         <div style={{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",margin:"30px auto"}}>
                      <MKInput
                                variant="outlined"
                                label="Percentage Match"
                                placeholder="0"
                                error={errorState.percentage}
                                value={formData.percentage}
                                onChange={(e)=>handleformData(e,"percentage")}
                                InputLabelProps={{ shrink: true }}
                                style={{width:"250px",margin:"0 25px"}}
                              />
                      <MKButton disabled={errorState.percentage} onClick={props.getmatchedCandidates} variant="gradient" color="info">
                              Get Candidates
                            </MKButton>
                      </div>


    <Box style={{marginTop:"10px"}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
            <Item>
              <div style={{height: "90vh"}}>
                <MKTypography sx={{textAlign:"left"}}>Movie Posted</MKTypography>
                  <Contact2 shortlist />
              </div>
            </Item>
            </Grid>
            
              <Grid item xs={2} sm={4} md={4}>
              <Item>
              <div className={classes.MatchedCandidateSection}>
                <MKTypography sx={{textAlign:"left"}}>Shortlisted Candidates</MKTypography>
                {props.matchedCandidates.length>0?
                <Accordian accordianArray={props.matchedCandidates} />
                :null}
              </div>
              </Item>
              </Grid>
            
              <Grid item xs={2} sm={4} md={4}>
              <Item>
              <div className={classes.MatchedCandidateSection}>
                <MKTypography sx={{textAlign:"left"}}>Finalize Candidate</MKTypography>
                {props.shortlistedCandidates.length>0?
                  <Accordian2 accordianArray={props.shortlistedCandidates} />
                  :null}
              </div>
              </Item>
              </Grid>
      </Grid>
    </Box>
          </Card>
        <MKBox py={2} width="100%" position="absolute">
        <SimpleFooter/>
      </MKBox>
      </MKBox>                
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    directorActivePosts: state.ScreenIt.directorActivePosts,
    userRegisteredId: state.ScreenIt.userRegisteredId,
    showForm:state.ScreenIt.showForm,
    listLoader:state.ScreenIt.listLoader,
    showError: state.ScreenIt.showError,
    errormsg:state.ScreenIt.errormsg,
    showSuccess:state.ScreenIt.showSuccess,
    succmsg:state.ScreenIt.succmsg,
    directorUpdateFormId:state.ScreenIt.directorUpdateFormId,
    shortlistedCandidates:state.ScreenIt.shortlistedCandidates,
    matchedCandidates:state.ScreenIt.matchedCandidates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActiveRoles:()=>dispatch(actions.fetchActiveRoles()),
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    setdirectorActivePosts: (value) => dispatch(actions.setdirectorActivePosts(value)),
    getmatchedCandidates:()=>dispatch(actions.getmatchedCandidates()),
    getShortlistedCandidates:()=>dispatch(actions.getShortlistedCandidates()),
    setpercentage:(value)=>dispatch(actions.setpercentage(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shortlist);


