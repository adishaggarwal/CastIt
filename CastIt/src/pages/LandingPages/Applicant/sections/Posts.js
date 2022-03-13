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

import classes from "./posts.module.css";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';
import axios from '../../../../axios';

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/plus.png";

function Places(props) {

  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");
  const [listLoader,setlistLoader]=useState(false);

  const useStyles22 = makeStyles((theme) => ({
    backdropLoader: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#0072C6',
    },
  }));
  const classes22 = useStyles22();

  const openForm=()=>{
    props.setshowForm("create");
  }

  const updatePost=(formId)=>{
    props.setshowForm("update");
    props.setdirectorUpdateFormId(formId);
  }

  // const fetchActiveRoles=()=>{
  //   let data=  {
  //     "userRegisteredId":props.userRegisteredId,
  //     }
    
  //   setlistLoader(true);
  // axios.post("/directorportal/selectallposting", data).then((res) => {
  //   let errorMsg="";
  //   setlistLoader(false);
  // if (res.data.error) {
  // //toaster
  // displayError(res.data.error);
  
  //     } else {
  //       props.setdirectorActivePosts(res.data);
  //     }
  //   })
  //   .catch((error) => {
  //     // setErrorMessage(error);
  //   setlistLoader(false);
  //   }); 
  // }

  const deletePost=(formId)=>{

        let options=  {
          "data":{
            "formId":formId
          }
          }

        setlistLoader(true);
        axios.delete("/directorportal/deleteposting", options).then((res) => {
        let errorMsg="";
        setlistLoader(false);
        if (res.data.error) {
        //toaster
        displayError(res.data.error);

          } else {
            props.fetchActiveRoles();
          }
        })
        .catch((error) => {
          displayError(error.message);
        setlistLoader(false);
        }); 
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
                {showError ?<MKAlert closeFun={closeAlert} color="error" dismissible>{errMsg}</MKAlert>:null}
                {showSuccess ?<MKAlert closeFun={closeAlert2} color="success" dismissible>{succMsg}</MKAlert>:null}
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            {props.heading}
          </MKTypography>
        </Grid>
        <div className={classes.RolesBox}  container spacing={3}>
        <Grid style={{marginLeft:"10px"}} item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={post4}
              hide
              clicked={openForm}
              action={{
                type: "none",
                // route: "/pages/blogs/author",
                // label: "read more",
              }}
            />
           
          </Grid>
          {(props.postArr).map((post, index) => {
                    return (
                      <Grid style={{marginLeft:"20px"}} item xs={12} sm={6} lg={3} >
            <TransparentBlogCard
              // image={post.movieImage}
              image={post3}
              clickedEdit={()=>updatePost(post.formId)}
              clickedDelete={()=>deletePost(post.formId)}
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
    setdirectorUpdateFormId:(value) => dispatch(actions.setdirectorUpdateFormId(value)),
    setdirectorActivePosts:(value) => dispatch(actions.setdirectorActivePosts(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);