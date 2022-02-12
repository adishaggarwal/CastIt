import React, { useState,useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../store/index';
import axios from '../../../axios';


function Author(props) {

  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");
  const [listLoader,setlistLoader]=useState(false);

  useEffect(() => {
    let data=  {
      "userRegisteredId":props.userRegisteredId,
      }
    
    setlistLoader(true);
  axios.post("/directorportal/selectallposting", data).then((res) => {
    let errorMsg="";
    setlistLoader(false);
  if (res.data.error) {
  //toaster
  displayError(res.data.error);
  
      } else {
        props.setdirectorActivePosts(res.data);
      }
    })
    .catch((error) => {
      // setErrorMessage(error);
    setlistLoader(false);
    }); 
  }, []);

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

  const closeAlert=()=>{
    setshowError(false);
  }
  const closeAlert2=()=>{
    setshowSuccess(false);
  }


  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
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
          <Posts postArr={props.directorActivePosts}  heading="Active Roles" />
        </Card>
        {props.showForm=="none"? null : <Contact />}
        <Footer />
      </MKBox>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    directorActivePosts: state.ScreenIt.directorActivePosts,
    userRegisteredId: state.ScreenIt.userRegisteredId,
    showForm:state.ScreenIt.showForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    setdirectorActivePosts: (value) => dispatch(actions.setdirectorActivePosts(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);

