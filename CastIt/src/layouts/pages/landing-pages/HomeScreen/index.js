

import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import HomeScreenBg from "assets/images/HomeScreenBg.jpg";
import logo from "assets/images/logo.PNG";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import SimpleFooter from "examples/Footers/SimpleFooter";
//import SignInBasic from "pages/LandingPages/SignIn";
import SignInBasic from "pages/LandingPages/SignIn";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// @mui material components
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import MKTypography from "components/MKTypography";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';

import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LoadHomeScreen=(props)=>
{

  useEffect(() => {
    props.setloginDirector(false);
    props.setloginApplicant(false);
  }, []);

  return(
    <section>
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
            )}, url(${HomeScreenBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}/>
      <MKBox mr="auto" zIndex={2} style={{position: 'absolute', left: '50px', left: '100px', top: '30px'}}>
        <img src={logo} style={{height: '75px', width:'95px', borderRadius: '10px'}}/>
      </MKBox>
      <MKBox mr="auto" zIndex={2} style={{position: 'absolute', right: '350px', top: '30px'}}>
        <SignInButtons/>
      </MKBox>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop: '300px'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
        <MKTypography variant="h2" color="white">Castit</MKTypography>
      </MKBox>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop: '50px'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
      <MKTypography variant="h4" color="white">Join Castit today, land auditions tomorrow!</MKTypography>
      </MKBox>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop: '50px', paddingLeft: '80px'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
      <MKTypography variant="h5" color="white">Elevate your career with Castit’s leading job platform, tools and expert resources.
      </MKTypography>
      </MKBox>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop: '50px', paddingLeft: '90px'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
      <MKTypography variant="h5" color="white">
      Grow with us and gain experience as well as knowledge to take your career to the next level.</MKTypography>
      </MKBox>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop: '50px', paddingLeft: '50px'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
      <MKTypography variant="h5" color="white">
      Join Castit to take control of your acting career by signing up now.</MKTypography>
      </MKBox>
      </div>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>     
      {/* <MKBox mr="auto" zIndex={2} style={{position: 'absolute', right: '250px', top: '30px'}}>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 6">
              <Item><SignInButtons/></Item>
            </Box>
            <Box gridColumn="span 6">
              <Item>xs=4</Item>
            </Box>
          </Box>
        </Box>
      </MKBox> */}
        {/* <MKBox mr="auto" zIndex={2} top={20} right={5} style={{position: 'absolute', left: '50px'}}>
        <Grid container rowSpacing={1} columnSpacing={{sm:2}}>
        <Grid item xs={6}>
        <img src={logo} style={{height: '95px', width:'100px', borderRadius: '10px'}}/>
        </Grid>
        </Grid>
      </MKBox>
      <MKBox mr="auto" zIndex={2} top={20} right={5} style={{position: 'absolute', right:0}}>
        <Grid container rowSpacing={1} columnSpacing={{sm:2}} direction='row'>
        <Grid item xs={6}><SignInButtons/></Grid>
        <Grid item xs={5}><SignUpButtons/></Grid>          
        </Grid>
      </MKBox>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
        <MKTypography variant="h2" color="white">Castit</MKTypography>
      </MKBox>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',height: '5vh'}}>
      <MKBox zIndex={2} style={{position: 'absolute'}}>
      <MKTypography variant="h4" color="white">Join Castit today, land auditions tomorrow !</MKTypography>
      </MKBox>
      </div>
     
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
       */}
    </section>
  );
};

const SignInButtons = ()=>
{
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return(
    <section>
          <MKButton variant="gradient" color="info" onClick={toggleModal}>
            Sign In/Sign Up
          </MKButton>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              // position="relative"
              // width="490px"
              // display="flex"
              // flexDirection="column"
              // borderRadius="xl"
              // bgColor="white"
              // shadow="xl"
              // height="690px"
            >
              {/* <MKBox display="flex" alginItems="center" justifyContent="right" p={2}>
                <CloseIcon justifyContent="right" fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox> */}
              {/* <Divider sx={{ my: 0 }} /> */}
                <SignInBasic/>
              {/* <Divider sx={{ my: 0 }} /> */}
              {/* <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                  close
                </MKButton>
                <MKButton variant="gradient" color="info">
                  save changes
                </MKButton>
              </MKBox> */}
            </MKBox>
          </Slide>
        </Modal>
        </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedInDir: state.ScreenIt.isLoggedInDir,
    isLoggedInApp:state.ScreenIt.isLoggedInApp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setloginApplicant: (value) => dispatch(actions.setloginApplicant(value)),
    setloginDirector: (value) => dispatch(actions.setloginDirector(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadHomeScreen);