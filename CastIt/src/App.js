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
import { hot } from 'react-hot-loader/root';
import { useEffect } from "react";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from 'store/index';
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import SignIn from "pages/LandingPages/SignIn";
import HomeScreen from "layouts/pages/landing-pages/HomeScreen";
import ProtectedRoutes from 'protectedRoutes';

// Material Kit 2 React routes
import routes from "routes";

const App=(props)=> {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
   
  }, [props.isLoggedInDir,props.isLoggedInApp]);
  
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route=="/Applicant" && props.isLoggedInApp) {
        return <Route type={route.route} exact path={route.route} element={route.component} key={route.key} />;
      }
      if (route.route=="/Director" && props.isLoggedInDir) {
        return <Route type={route.route} exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/Home" element={<HomeScreen />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedInDir: state.ScreenIt.isLoggedInDir,
    isLoggedInApp:state.ScreenIt.isLoggedInApp
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setshowForm: (value) => dispatch(actions.setshowForm(value)),
//     displayError: (value,msg) => dispatch(actions.displayError(value,msg)),
//     displaySuccess: (value,msg) => dispatch(actions.displaySuccess(value,msg)),
//     fetchActiveRoles:()=>dispatch(actions.fetchActiveRoles()),
//     setLoggedinUser: (userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs) => dispatch(actions.setLoggedinUser(userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs))
//   };
// };

export default hot(connect(mapStateToProps, null)(App));
