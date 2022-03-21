import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { blueGrey } from '@mui/material/colors'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import React, { useState,useEffect } from "react";
// import ModeDeleteIcon from '@mui/icons-material/ModeDelete';
import Icon from "@mui/material/Icon";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomeScreen from "layouts/pages/landing-pages/HomeScreen";
import { useNavigate, useHistory } from 'react-router-dom';
import axios from '../../../../axios';
import * as actions from '../../../../store/index';


const AccountMenu=(props)=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [listLoader,setlistLoader]=useState(false);
  const [showError, setshowError] = useState(false);
  const [errMsg, seterrMsg] = useState("Some Error Occurred!");
  const [showSuccess, setshowSuccess] = useState(false);
  const [succMsg, setsuccMsg] = useState("Success!");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const routeChange = (val) =>{ 
    navigate('/'+val);
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

  const deleteUser=()=>{
    let options=  {
        "userRegisterationId":props.userRegisterationId
      }

    setlistLoader(true);
    axios.post("/applicantportal/deleteuser", options).then((res) => {
    let errorMsg="";
    setlistLoader(false);
    if (res.data.error) {
    //toaster
    displayError(res.data.error);

      } else {
        props.displaySuccess(false,"User Deleted Successfully!");
        routeChange("Home");
      }
    })
    .catch((error) => {
      displayError(error.message);
      setlistLoader(false);
    }); 
  }

  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ bgcolor: blueGrey[500], width: 42, height: 42 }}>{props.userInitials}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ModeEditIcon fontSize="small" />
          </ListItemIcon>
          Edit details
        </MenuItem>
        <MenuItem onClick={deleteUser}>
          <ListItemIcon>
          <Icon>delete</Icon>
          </ListItemIcon>
          Delete User
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={routeChange}>
          <ListItemIcon >
            <Logout fontSize="small"/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
    return {
      userFirstName:state.ScreenIt.userFirstName,
      userLastName:state.ScreenIt.userLastName,
      userRegisterationId:state.ScreenIt.userRegisterationId,
      userInitials:(state.ScreenIt.userFirstName.charAt(0)).concat(state.ScreenIt.userLastName.charAt(0)),
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      // setshowForm: (value) => dispatch(actions.setshowForm(value)),
      displayError: (value,msg) => dispatch(actions.displayError(value,msg)),
      displaySuccess: (value,msg) => dispatch(actions.displaySuccess(value,msg)),
      // fetchActiveRoles:()=>dispatch(actions.fetchActiveRoles()),
      // setLoggedinUser: (userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs) => dispatch(actions.setLoggedinUser(userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);
