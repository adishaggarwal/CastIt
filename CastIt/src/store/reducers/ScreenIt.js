import * as actionTypes from "../actionTypes";

const initialState = {
  // errorState:false,
  // brownerrorMsg:"",
  // tabType:"data",
  // pdfFinalBase64:"",
  // isXmlData:true,
  // users:[],
  // productName: !(window.location.href.includes(":3000"))?'':"DEMAND",
  "userRegisterationId": -1,
  "userEmail": "",
  "userFirstName": "",
  "userLastName": "",
  "userDOB": "",
  "userRegistereAs": ""
};


const ScreenItreducer = (state = initialState, action) => {
  
  switch (action.type) {
      // case actionTypes.SET_ERROR_STATE:
      //   return {
      //     ...state,
      //     errorState: action.value,
      //     errorMsg:action.msg
      //   };
          case actionTypes.SET_LOGGEDIN_USER:
            return {
              ...state,
              userRegisterationId: action.userRegisterationId,
              userEmail:action.userEmail,
              userFirstName:action.userFirstName,
              userLastName:action.userLastName,
              userDOB:action.userDOB,
              userRegistereAs:action.userRegistereAs ,
      
            };
     
    default:
      return state;
  }
};

export default ScreenItreducer;
