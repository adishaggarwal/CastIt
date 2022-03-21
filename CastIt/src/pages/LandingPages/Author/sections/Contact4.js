
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
      "email": "",
      "firstName": "",
      "lastName": "",
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


  useEffect(() => {
    
  }, [props.showError,props.showSuccess]);


  useEffect(() => {
    if(props.showAccordian2==="accordian")
    {
      let result = (props.directorActivePosts).find((obj) => {
        return obj.formId === props.directorUpdateFormId;
      });
      let result2 = (props.shortlistedCandidates).find((obj) => {
        return obj.userRegisteredId === props.currentAccordianAppId2;
      });
      const formDataCopy={...formData};
      const charDataCopy=[...charData];

      
      formDataCopy["movieName"]=result.movieName;
      formDataCopy["movieDesc"]=result.movieDesc;
      formDataCopy["movieGenre"]=result.movieGenre;
      formDataCopy["role"]=result.role;
      formDataCopy["roleDescription"]=result.roleDescription;
      formDataCopy["roleStatus"]=result.roleStatus;
      formDataCopy["email"]=result2.userEmail;
      formDataCopy["firstName"]=result2.userFirstName;
      formDataCopy["lastName"]=result2.userLastName;

      for(let i=0;i<5;i++)
      {
        let charArr=(result2["characteristics"+(i+1)]).split(",");
        charDataCopy[i].characteristic=charArr[0];
        charDataCopy[i].value=charArr[1];
      }
      
      setcharData(charDataCopy);
      setformData(formDataCopy);

    }
  }, [props.currentAccordianAppId2]);



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

  // const rightSwipe=()=>{
    
  //   let data=  {
  //     "applicantFormId":props.currentAccordianAppId2,
  //     }
      
  //     let url="/applicantportal/rightswipe";
    
  //   setlistLoader(true);
  // axios.post(url, data).then((res) => {
  //   let errorMsg="";
  //   setlistLoader(false);
  // if (res.data.error) {
  // //toaster
  // displayError(res.data.error);
  
  //     } else {
  // displaySuccess("Applicant Shortlisted!");
  // // props.setLoggedinUser(res.data.userRegisterationId,res.data.userEmail,res.data.userFirstName,res.data.userLastName,res.data.userDOB,res.data.userRegistereAs);
  // props.getmatchedCandidates();
  //     }
  //   })
  //   .catch((error) => {
  // displayError(error.message);  
  //   setlistLoader(false);
  //   }); 

  // }
  
  return (
    <React.Fragment>
      <Backdrop className={classes22.backdropLoader} open={listLoader} >
                <CircularProgress color="inherit" />
                </Backdrop>
                {/* {props.showError ?<MKAlert closeFun={closeAlert} color="error" dismissible>{props.errormsg}</MKAlert>:null}
                {props.showSuccess ?<MKAlert closeFun={closeAlert2} color="success" dismissible>{props.succmsg}</MKAlert>:null} */}
    {/* <MKBox component="section" py={{ xs: 0, lg: 6 }}> */}
      {/* <Container> */}
        {/* <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          > */}
            {/* <Grid container spacing={2}> */}
              {/* <Grid item xs={12} lg={7}> */}
                <MKBox background="#eef0f3" component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={0}>
                      {props.showForm==="create" ? "Post a new role!":(props.showForm==="update" ? "Update role!":null)}
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
                          label="Applicant First Name"
                          value={formData.firstName}
                          InputLabelProps={{ shrink: true }}
                          disabled
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Applicant Last Name"
                          value={formData.lastName}
                          InputLabelProps={{ shrink: true }}
                          disabled
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Applicant Email"
                          value={formData.email}
                          InputLabelProps={{ shrink: true }}
                          disabled
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Name of the movie is"
                          value={formData.movieName}
                          InputLabelProps={{ shrink: true }}
                          disabled
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Movie Description"
                          value={formData.movieDesc}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          disabled
                          multiline
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Movie Genre"
                          value={formData.movieGenre}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          disabled
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <MKInput
                          variant="standard"
                          label="Movie Role"
                          value={formData.role}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          disabled
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                      <MKInput
                          variant="standard"
                          label="Role Description"
                          value={formData.roleDescription}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          disabled
                          multiline
                          rows={2}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                      <MKInput
                          variant="standard"
                          label="Role Status"
                          value={formData.roleStatus}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          disabled={true}
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
                          style={{width:props.charWidth}}
                          variant="standard"
                          value={charItem.characteristic}
                          InputLabelProps={{ shrink: true }}
                          // size='small'
                          disabled
                        />
                        <MKInput
                          style={{width:props.charWidth}}
                          variant="standard"
                          value={charItem.value}
                          InputLabelProps={{ shrink: true }}
                          // size='small'
                          disabled
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
                      <MKButton  variant="gradient" color="info">
                        Shortlist
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              {/* </Grid> */}
            {/* </Grid> */}
          {/* </MKBox> */}
        {/* </Grid> */}
      {/* </Container> */}
    {/* </MKBox> */}
    </React.Fragment>
  );
}


const mapStateToProps = (state) => {
  return {
    userRegisterationId: state.ScreenIt.userRegisterationId,
    showForm:state.ScreenIt.showForm,
    showAccordian2:state.ScreenIt.showAccordian2,
    currentAccordianAppId2:state.ScreenIt.currentAccordianAppId2,
    shortlistedCandidates: state.ScreenIt.shortlistedCandidates,
    directorActivePosts:state.ScreenIt.directorActivePosts,
    directorUpdateFormId:state.ScreenIt.directorUpdateFormId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    displayError: (value,msg) => dispatch(actions.displayError(value,msg)),
    displaySuccess: (value,msg) => dispatch(actions.displaySuccess(value,msg)),
    fetchActiveRoles:()=>dispatch(actions.fetchActiveRoles()),
    getShortlistedCandidates:()=>dispatch(actions.getShortlistedCandidates()),
    setLoggedinUser: (userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs) => dispatch(actions.setLoggedinUser(userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
