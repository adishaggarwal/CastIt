
import Author from "pages/LandingPages/Author";
import Shortlist from "pages/LandingPages/Author/shortlist";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';

// props.showForm==="shortlistPage"

function AuthorPage(props) {

  useEffect(() => {
   
  }, [props.showForm]);

  return (props.showForm==="shortlistPage" || props.showForm==="shortlistClosedPage") ? <Shortlist/> : <Author />;
}

const mapStateToProps = (state) => {
  return {
    showForm:state.ScreenIt.showForm,
  };
};


export default connect(mapStateToProps, null)(AuthorPage);
