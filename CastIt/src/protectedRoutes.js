// import { Route, Navigate } from "react-router-dom";
// import React, { useState,useEffect } from "react";
// import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
// import * as actions from 'store/index';

//  const ProtectedRoute = ({
//   component: Component,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (props.isLoggedInDir && ) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Navigate
//               to={{
//                 pathname: "/",
//                 state: {
//                   from: props.location
//                 }
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

// const mapStateToProps = (state) => {
//     return {
//       isLoggedIn: state.ScreenIt.isLoggedIn,
//     };
//   };
  
//   export default connect(mapStateToProps, null)(ProtectedRoute);
  
