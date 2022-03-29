import React, { useState,useEffect} from "react";
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
import { useNavigate } from 'react-router-dom';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
// import { Close } from '@material-ui/icons';

import CircularProgress from '@material-ui/core/CircularProgress';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import CenteredBlogCard  from "examples/Cards/BlogCards/CenteredBlogCard";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
// import {confirmDialog} from "pages/LandingPages/Author/sections/ConfirmationDialog";
import ConfirmDialog from "pages/LandingPages/Author/sections/ConfirmDiag2";

import classes from "./posts.module.css";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';
import axios from '../../../../axios';

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/plus.png";
import add_image from "assets/images/add_image.png";
//import add_item2 from "assets/images/add-item2.png";
//import add_item2 from "assets/images/add-item2.png";
import add_image4 from "assets/images/add_image4.png";
import Plus_blue from "assets/images/Plus_blue.png";
import Clapperboard from "assets/images/Clapperboard-Transparent.png"
// import postImg1 from "assets/images/postImgs/postImg1.png"
// import postImg2 from "assets/images/postImgs/postImg2.png"
// import postImg3 from "assets/images/postImgs/postImg3.png"
// import postImg4 from "assets/images/postImgs/postImg4.jpg"
// import postImg5 from "assets/images/postImgs/postImg5.png"
// import postImg6 from "assets/images/postImgs/postImg6.png"


import postImg1 from "assets/images/postImgs/DirectorPost/postImg1.jpeg"

import postImg2 from "assets/images/postImgs/DirectorPost/postImg2.jpg"

import postImg3 from "assets/images/postImgs/DirectorPost/postImg3.jpeg"

import postImg4 from "assets/images/postImgs/DirectorPost/postImg4.jpeg"

import postImg5 from "assets/images/postImgs/DirectorPost/postImg5.jpg"

import postImg6 from "assets/images/postImgs/DirectorPost/postImg6.jpeg"

import postImg7 from "assets/images/postImgs/DirectorPost/postImg7.jpeg"

import postImg8 from "assets/images/postImgs/DirectorPost/postImg8.jpeg"

import postImg9 from "assets/images/postImgs/DirectorPost/postImg9.jpeg"

import postImg10 from "assets/images/postImgs/DirectorPost/postImg10.jpeg"


function Places(props) {

  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [ConfirmDialogState, setshowConfirmDiag] = useState (false);
  const [deleteFormID, setDeleteFormID] = useState ("");
  const [isNewPost, setIsNewPost] = useState (false);
  const [succMsg, setsuccMsg] = useState("Success!");
  const [listLoader,setlistLoader]=useState(false);
  const navigate = useNavigate();

  
  const postLabel=props.closed==false? "Shortlist Applicant" : "View Application";
  

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

    useEffect(() => {
      
      }, [props.closed]);

  const useStyles22 = makeStyles((theme) => ({
    backdropLoader: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#0072C6',
    },
  }));
  const classes22 = useStyles22();

  function scrollToPosts()
  {
    const ele= document.getElementById("posts");
    ele.scrollIntoView({behavior: "smooth"});

  }

  const openForm=()=>{
    props.setshowForm("create");
    const myTimeout = setTimeout(scrollToPosts, 50);

  }

  const updatePost=(formId)=>{
    props.setshowForm("update");
    props.setdirectorUpdateFormId(formId);
    const myTimeout = setTimeout(scrollToPosts, 50);
    
  }
  const handleConfirmDiag = (formId) => {
    setshowConfirmDiag(!ConfirmDialogState);
    setDeleteFormID(formId);
  }


  const deletePost=()=>{

        let options=  {
          "data":{
            "formId":deleteFormID
          }
          }

        setlistLoader(true);
        axios.delete("/directorportal/deleteposting", options).then((res) => {
        setshowConfirmDiag(false);
        let errorMsg="";
        setlistLoader(false);
        if (res.data.error) {
        //toaster
        displayError(res.data.error);

          } else {
            displaySuccess("Role deleted successfully!");
            props.fetchActiveRoles();
          }
        })
        .catch((error) => {
          displayError(error.message);
        setlistLoader(false);
        }); 
  }

  const displayError=(msg)=>{
    // setshowError(true);
    // seterrMsg(msg);
    props.displayError(true,msg);
    const myTimeout = setTimeout(closeAlert, 5000);
  }

  const openShortlistPage=(formId)=>{
    // navigate('/Shortlist');
    
    props.setshowForm("shortlistPage");
    
    props.setdirectorUpdateFormId(formId);
    //props.setIsNewPost(isClosed==false?"true":"false");
    
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
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            {props.heading}
          </MKTypography>
        </Grid>
        <div className={classes.RolesBox}  container spacing={2}>
          {!props.closed?
            <Grid style={{marginLeft:"20px"}} item xs={12} sm={4} lg={2}>
                <CenteredBlogCard
                  image={Plus_blue}
                  hide
                  clicked={openForm}
                  action={{
                    type: "none",
                    // route: "/pages/blogs/author",
                    // label: "read more",
                  }}
                />
              
              </Grid>:null}
          {/* <Button
              onClick={handleConfirmDiag}
            >
              Delete All The Data
            </Button> */}

          
        
          {(props.postArr).map((post, index) => {
             
                    return (
                      <>
                      {post.roleStatus=="Active"?<Grid style={{marginLeft:"20px"}} item xs={12} sm={5} lg={2} >  
                          <TransparentBlogCard
                            // image={post.movieImage}
                            image={projects[index].photo}
                            clickedEdit={()=>updatePost(post.formId)}
                            // clickedDelete={()=>deletePost(post.formId)}
                            clickedDelete={()=>handleConfirmDiag(post.formId)}
                            shortlistPage={()=>openShortlistPage(post.formId)}
                            title={post.movieName}
                            description={post.movieDesc}
                            action={{
                              type: "internal",
                              route: "/Shortlist",
                              color: "info",
                              label: postLabel,
                            }}
                          />
                        </Grid>:null}
          </>
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
    setdirectorActivePosts:(value) => dispatch(actions.setdirectorActivePosts(value)),
    displayError: (value,msg) => dispatch(actions.displayError(value,msg)),
    displaySuccess: (value,msg) => dispatch(actions.displaySuccess(value,msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);