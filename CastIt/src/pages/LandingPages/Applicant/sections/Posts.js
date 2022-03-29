import React, { useState,useEffect } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import Backdrop from '@material-ui/core/Backdrop';
import MKAlert from "components/MKAlert"
import {
  lighten,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import CenteredBlogCard  from "examples/Cards/BlogCards/CenteredBlogCard";
import ConfirmDialog from "pages/LandingPages/Applicant/sections/ConfirmDiag2";

import classes from "./posts.module.css";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';
import axios from '../../../../axios';

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/plus.png";
//import postImg4 from "assets/images/postImgs/postImg4.jpg"


import postImg1 from "assets/images/postImgs/ApplicantPost/postImg1.jpeg"

import postImg2 from "assets/images/postImgs/ApplicantPost/postImg2.jpeg"

import postImg3 from "assets/images/postImgs/ApplicantPost/postImg3.jpeg"

import postImg4 from "assets/images/postImgs/ApplicantPost/postImg4.jpeg"

import postImg5 from "assets/images/postImgs/ApplicantPost/postImg5.jpeg"

import postImg6 from "assets/images/postImgs/ApplicantPost/postImg6.jpeg"

import postImg7 from "assets/images/postImgs/ApplicantPost/postImg7.jpeg"

import postImg8 from "assets/images/postImgs/ApplicantPost/postImg8.jpeg"

import postImg9 from "assets/images/postImgs/ApplicantPost/postImg9.jpeg"

import postImg10 from "assets/images/postImgs/ApplicantPost/postImg10.jpeg"

function Places(props) {

  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");
  const [listLoader,setlistLoader]=useState(false);
  const [ConfirmDialogState, setshowConfirmDiag] = useState (false);
  const [deleteFormID, setDeleteFormID] = useState ();

  const useStyles22 = makeStyles((theme) => ({
    backdropLoader: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#0072C6',
    },
  }));

  const projects = [
    {
      photo:postImg1
    },
    {
      photo:postImg2
    },
    {
      photo:postImg3
    },
    {
      photo:postImg4
    },
    {
      photo:postImg5
    },
    {
      photo:postImg6
    },
    {
      photo:postImg7
    },
    {
      photo:postImg8
    },
    {
      photo:postImg9
    },
    {
      photo:postImg10
    },
    ];
  const classes22 = useStyles22();

  function scrollToPosts()
  {
    const ele= document.getElementById("posts");
    ele.scrollIntoView({behavior: "smooth"});

  }

  const applyPost=(formId)=>{
    props.setshowForm("applyjob");
    props.setapplicantUpdateFormId(formId);
    const myTimeout = setTimeout(scrollToPosts, 50);
  }

  const editapplyPost=(formId,applicantFormId)=>{
    props.setshowForm("editapplyjob");
    props.setapplicantUpdateFormId(formId);
    props.setapplicantFormId(applicantFormId);
    const myTimeout = setTimeout(scrollToPosts, 50);
  }

  const handleConfirmDiag = (formId) => {
    setshowConfirmDiag(!ConfirmDialogState);
    setDeleteFormID(formId);
  }

  const displayError=(msg)=>{
    // setshowError(true);
    // seterrMsg(msg);
    props.displayError(true,msg);
    const myTimeout = setTimeout(closeAlert, 5000);
  }

  const displaySuccess=(msg)=>{
    // setshowSuccess(true);
    // setsuccMsg(msg);
    props.displaySuccess(true,msg);
    const myTimeout = setTimeout(closeAlert2, 5000);
  }

  const closeAlert=()=>{
    props.displayError(false,"");
  }
  const closeAlert2=()=>{
    props.displaySuccess(false,"");
  }

  const deletePost=(applicantFormId)=>{

    let options=  {
      "data":{
        "applicantFormId":deleteFormID
      }
      }

    setlistLoader(true);
    axios.delete("/applicantportal/deleteapplication", options).then((res) => {
    setshowConfirmDiag(false);
    let errorMsg="";
    setlistLoader(false);
    if (res.data.error) {
    //toaster
    displayError(res.data.error);

      } else {
        displaySuccess("Application deleted successfully!");
        props.fetchApplicantPosting();
        props.fetchApplicantAppliedPosting();
      }
    })
    .catch((error) => {
      displayError(error.message);
      setlistLoader(false);
    }); 
}
  

  // const displayError=(msg)=>{
  //   // setshowError(true);
  //   // seterrMsg(msg);
  //   props.displayError(true,msg);
  //   const myTimeout = setTimeout(closeAlert, 5000);
  // }

  // const displaySuccess=(msg)=>{
  //   // setshowSuccess(true);
  //   // setsuccMsg(msg);
  //   props.displaySuccess(true,msg);
  //   const myTimeout = setTimeout(closeAlert2, 5000);
  // }

  // const closeAlert=()=>{
  //   props.displayError(false,"");
  // }
  // const closeAlert2=()=>{
  //   props.displaySuccess(false,"");
  // }

  return (
    <>
     <Backdrop className={classes22.backdropLoader} open={listLoader} >
                <CircularProgress color="inherit" />
                </Backdrop>
                {ConfirmDialogState ? <ConfirmDialog  
                  confirmDelete={()=>deletePost()} 
                  cancelConfirmDiag={()=>setshowConfirmDiag(false)}/> : null}
                {/* {showError ?<MKAlert closeFun={closeAlert} color="error" dismissible>{errMsg}</MKAlert>:null}
                {showSuccess ?<MKAlert closeFun={closeAlert2} color="success" dismissible>{succMsg}</MKAlert>:null} */}
    <MKBox component="section" py={2}>
      <Container>
        {(props.postArr).length>0?<Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            {props.heading}
          </MKTypography>
        </Grid>:null}
        <div className={classes.RolesBox}  container spacing={3}>
        {/* <Grid style={{marginLeft:"10px"}} item xs={12} sm={6} lg={3}> */}
            {/* <CenteredBlogCard
              image={post4}
              hide
              clicked={openForm}
              action={{
                type: "none",
                // route: "/pages/blogs/author",
                // label: "read more",
              }}
            /> */}
           
          {/* </Grid> */}
          {(props.postArr).map((post, index) => {
                    return (
                      <Grid style={{marginLeft:"20px"}} item xs={12} sm={6} lg={3} >
            <TransparentBlogCard
              // image={post.movieImage}
              image={projects[index].photo}
              isApplicant={true}
              isApplicantOptions={props.isApplicantOptions}
              // clickedDelete={()=>deletePost(post.applicantPortalBean.applicantFormId)}
              clickedDelete={props.isApplicantOptions?()=>handleConfirmDiag(post.applicantPortalBean.applicantFormId):()=>handleConfirmDiag(post.applicantFormId)}
              clickedEdit={props.isApplicantOptions ? ()=>editapplyPost(post.formId,post.applicantPortalBean.applicantFormId) :()=>applyPost(post.formId)}
              title={post.movieName}
              description={post.movieDesc}
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
                    );
                  })}
        </div>
      </Container>
    </MKBox>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // directorActivePosts: state.ScreenIt.directorActivePosts,
    showForm:state.ScreenIt.showForm,
    userRegisteredId:state.ScreenIt.userRegisteredId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActiveRoles:()=>dispatch(actions.fetchActiveRoles()),
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    setapplicantUpdateFormId:(value) => dispatch(actions.setapplicantUpdateFormId(value)),
    setapplicantFormId:(value) => dispatch(actions.setapplicantFormId(value)),
    // setdirectorActivePosts:(value) => dispatch(actions.setdirectorActivePosts(value)),
    displayError: (value,msg) => dispatch(actions.displayError(value,msg)),
    displaySuccess: (value,msg) => dispatch(actions.displaySuccess(value,msg)),
    fetchApplicantPosting:()=>dispatch(actions.fetchApplicantPosting()),
    fetchApplicantAppliedPosting:()=>dispatch(actions.fetchApplicantAppliedPosting())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);