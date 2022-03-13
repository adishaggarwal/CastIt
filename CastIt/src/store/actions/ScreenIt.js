import * as actionTypes from "../actionTypes";
import axios from "../../axios";
import store from '../store';



export const setLoggedinUser = (userRegisterationId,userEmail,userFirstName,userLastName,userDOB,userRegistereAs) => {
  return {
    type: actionTypes.SET_LOGGEDIN_USER,
    userRegisterationId: userRegisterationId,
    userEmail:userEmail,
    userFirstName:userFirstName,
    userLastName:userLastName,
    userDOB:userDOB,
    userRegistereAs:userRegistereAs ,
  };
};

export const setshowForm = (value) => {
  return {
    type: actionTypes.SET_SHOW_FORM,
    value: value
  };
};

export const setdirectorActivePosts = (value) => {
  return {
    type: actionTypes.SET_DIRECTORACTIVE_POSTS,
    value: value
  };
};

export const setdirectorUpdateFormId = (value) => {
  return {
    type: actionTypes.SET_DIRECTORUPDATE_FORMID,
    value: value
  };
};

export const setlistLoader = (value) => {
  return {
    type: actionTypes.SET_LIST_LOADER,
    value: value
  };
};

export const displayError = (value,msg) => {
  return {
    type: actionTypes.DISPLAY_ERROR,
    value: value,
    msg:msg
  };
};

export const fetchActiveRoles = () => {
  let data=  {
    "userRegisteredId":store.getState().ScreenIt.userRegisteredId,
    // "userRegisteredId":"abcdas",
    }
    // dispatch(setlistLoader(true)); 
  return (dispatch)=>{ 
    axios.post("/directorportal/selectallposting", data)
  .then((res) => {
    dispatch(setlistLoader(false));
    if (res.data.error) {
          dispatch(displayError(true,res.data.error));
        } else {
          dispatch(setdirectorActivePosts(res.data));
        }
  
}).catch((err) => {
  dispatch(setlistLoader(false));
  dispatch(displayError(true,err.message));
});
}   
};


// export const fetchRequestParams = (object) => {
//   return {
//     type: actionTypes.FETCH_REQUEST_PARAMETERS,
//     initialXmlData:object.xmlData,
//     initialJsonData:object.jsonData,
//     productName: object.productName, 
//   cabinetName: object.cabinetName,
 
//   sessionId: object.sessionId, 
//   transactionId: object.transactionId, 
//   skipApproval:object.skipApproval,
//   skipEditing:object.skipEditing,
//   thirdPartyURL:object.thirdPartyURL,
//   sendMail:object.sendMail,
//   doArchive:object.doArchive,
//   reportType:object.reportType,
//   userName:object.userName,
//   isEditor:object.isEditor,
//   isAdminConsole:object.isAdminConsole,
//   pageType:object.pageType,
//   attachmentsLocation:object.attachmentsLocation,
//   doLogout:object.doLogout,
//   outputFileName:object.outputFileName,
//   outputPath:object.outputPath
//   };
// };





// export const getHTMLInputElement = (value) => {
//   return (dispatch) => {
//     let temp = document.getElementById(value);
//     if(temp){ 
//       // document.getElementById(value).remove();
//       return temp.value; 
//     } else { 
//       return ""; 
//     }
//   };
// };





// export const omsContractGeneration = (xml,ifInitialCall,action,UpdatedClauseText,clauseData,errorMessage,successMessage) => {

//   let object={};

//   object.AttachmentsLocation= store.getState().interactiveEditor.attachmentsLocation;
//   object.CabinetName= store.getState().interactiveEditor.cabinetName;
//   object.ProductName= store.getState().interactiveEditor.productName;
//   object.QueueForArchival= store.getState().interactiveEditor.doArchive;
//   object.QueueForMail= store.getState().interactiveEditor.sendMail;
//   object.SessionId=store.getState().interactiveEditor.sessionId;
//   object.SkipApproval= store.getState().interactiveEditor.skipApproval;
//   object.SkipEditing= store.getState().interactiveEditor.skipEditing;
//   object.TransactionId= store.getState().interactiveEditor.transactionId;
//   object.UserChange= "N";
//   object.UserDataChange= "Y";
//   object.ResetAll= "N";
//   object.outputFileName = store.getState().interactiveEditor.outputFileName;
//   object.outputPath = store.getState().interactiveEditor.outputPath;
//   if(store.getState().interactiveEditor.isXmlData)
//   {
//     object.XMLData=xml;
//     object.JSONData='';
//   }
//   else{
//     object.JSONData=xml;
//     object.XMLData='';
//   }

//   if(ifInitialCall === "reset")
//   {
//   object.ResetAll= "Y";
//   object.UserDataChange= "N";
//   }
//   else if(ifInitialCall==="clauses")
//   {
//     object.Action= action;
//     object.UpdatedClauseText=UpdatedClauseText;
//     object.clauseData=clauseData;
//     object.UserChange= "Y";
//   object.UserDataChange= "N";
//   }
//   else if(ifInitialCall==="initial" || ifInitialCall==="generate")
//   {
//     object.UserDataChange= "N";
//   }
  

//   return (dispatch) => {
//     axios
//         .post("omsContractGeneration", object)
//         .then((response) => {
//           let rep=i18n.t("REPORT");
//           if(response.data.ReportType)
//           {
//           rep=response.data.ReportType==="C"?i18n.t("CONTRACT"):(response.data.ReportType==="L"?i18n.t("LETTER1"):i18n.t("HTML"))
//           }
//               if(successMessage !=="" && parseInt(response.data.Status) === 0)
//               {
//                 if(response.data.ContractStatus==="PA" && response.data.IsApprover==="N")
//                 {
//                   dispatch(setBlueErrorState(true,i18n.t("THIS")+" "+rep+ i18n.t("REPORT_UNDER_APPROVAL")));
//                 }
//                 else if(response.data.ContractStatus==="APP" || response.data.ContractStatus==="SAVE")
//                 {
//                   dispatch(setBlueErrorState(true, i18n.t("THIS")+" "+rep+   i18n.t("REPORT_APPROVED")));
//                 }
//                 else if(response.data.ContractStatus==="REJ")
//                 {
//                   dispatch(setBrownErrorState(true,i18n.t("THIS")+" "+rep+i18n.t("REPORT_REJECTED_ALERT")));
//                 }
//                 else
//                 {
//                 dispatch(setSuccessState(true,successMessage));
//                 }
//               }
//               else if(parseInt(response.data.Status) === 0 && (response.data.ContractStatus==="APP" || response.data.ContractStatus==="SAVE"))
//               {
//                 dispatch(setBlueErrorState(true,i18n.t("THIS")+" "+rep+   i18n.t("REPORT_APPROVED")));
//               }
//               else if(parseInt(response.data.Status) === 0 && response.data.ContractStatus==="PA" && response.data.IsApprover==="N")
//               {
//                 dispatch(setBlueErrorState(true,i18n.t("THIS")+" "+rep+ i18n.t("REPORT_UNDER_APPROVAL")));
//               }
//               else if(parseInt(response.data.Status) === 0 && response.data.ContractStatus==="REJ")
//               {
//                 dispatch(setBrownErrorState(true,i18n.t("THIS")+" "+rep+i18n.t("REPORT_REJECTED_ALERT")));
//               }
//              else if(parseInt(response.data.Status) === 1014)
//             {
//               dispatch(setErrorState(true,i18n.t("LETTER_ID_NOT_VALID")));
//               return;
//             }
//             else if( parseInt(response.data.Status) === 701)
//             {
//               dispatch(setError2State(true,i18n.t("INCOMPLETE_DETAILS_SEND_MAIL")));
//               return;
//             }
            
//             else if(parseInt(response.data.Status) === -1)
//             {
//               dispatch(setErrorState(true,i18n.t("INVALID_SESSION")));
//               dispatch(setLogoutState(true));
//               return;
//             }
//             else if(parseInt(response.data.Status) !== 0)
//             {
//               dispatch(setErrorState(true,errorMessage));
//               dispatch(setLogoutState(true));
//               return;
//             }

//             if(store.getState().interactiveEditor.OutputFormat)
//             {
//               dispatch(setDocxData(response.data.DocxData));
//             }

//             dispatch(setGenerateDisable(false));
//             // let read=["Root.Agreements.Customer.Name","Root.Agreements.Customer.EmailId"];
//             // dispatch(setReadOnlyFields(read));
//             dispatch(setReadOnlyFields(response.data.ReadOnlyFields));

//               let fileData=response.data.FileData;
//               // let finalEscapedBase64="data:application/pdf;base64," + (decodeURI(fileData)).replaceAll(/\u21B5/g,'');
//               let finalEscapedBase64= (decodeURI(fileData)).replaceAll(/\u21B5/g,'');
//               const clauseCopy = (response.data.ClauseList).map(a => Object.assign({}, a));
//               const clauseCopy2 = (response.data.ClauseList).map(a => Object.assign({}, a));
//               if(ifInitialCall === "initial")
//               {
//                 dispatch(setInitialClauses(clauseCopy));
//                 dispatch(setInfoData(response.data.RequestId,response.data.QueueForArchival,response.data.QueueForMail,response.data.CategoryName,response.data.CommunicationGroupName,response.data.ReportName,response.data.ReportVersion,response.data.OutputFormat));
//               }
//               dispatch(setPdfBase64(finalEscapedBase64));
//               dispatch(setTransactionId(response.data.TransactionId));
//               dispatch(setCurrentClauses(clauseCopy2));


//               // if(store.getState().interactiveEditor.isXmlData)
//               if((response.data.DataXML).startsWith("<"))
//               {
//                 dispatch(setIsXmlData(true));
//                 dispatch(setInitialJsonData(""));
//                 dispatch(setCurrentJsonData(""));
//                 dispatch(setCurrentXmlData(response.data.DataXML));
//                 if(store.getState().interactiveEditor.firstCall)
//                 {
//                   dispatch(setInitialXmlData(response.data.DataXML));
//                   dispatch(setFirstCall(false));
//                 }
//               }
//               else if((response.data.DataXML).startsWith("{"))
//               {
//                 dispatch(setIsXmlData(false));
//                 dispatch(setCurrentXmlData(""));
//                 dispatch(setInitialXmlData(""));
//                 dispatch(setCurrentJsonData(response.data.DataXML));
//                 if(store.getState().interactiveEditor.firstCall)
//                 {
//                   dispatch(setInitialJsonData(response.data.DataXML));
//                   dispatch(setFirstCall(false));
//                 }
//               }
//               else
//               {
//                 dispatch(setCurrentXmlData(response.data.DataXML));
//               }
//               let approver="";
//               // let approver="Y"
//               if(response.data.IsApprover)
//               {
//                 approver=response.data.IsApprover; 
//               }
//               if((approver==="N" && response.data.ContractStatus==="PA") || response.data.ContractStatus==="APP" || response.data.ContractStatus==="SAVE")
//               {
//                 // dispatch(handleReviewChanges(true));
//               }
//               else if(approver==="Y" && response.data.ContractStatus==="PA")
//               // else if(true)
//               {
//                 let approveArr=[];
//                 for(let i=0;i<clauseCopy2.length;i++)
//                 {
//                   if(clauseCopy2[i]["IsEdited"]==="N" && clauseCopy2[i]["IsDeleted"]==="N")
//                   {
//                     approveArr.push("app");
//                   }
//                   else
//                   {
//                     approveArr.push("noAction");
//                   }
//                 }
//                 dispatch(setApproveArr(approveArr));
//                 dispatch(setAppRejState(true));
//                 // dispatch(handleReviewChanges(true));
//               }
//               // let a=[...response.data.CommentList,...response.data.CommentList,...response.data.CommentList,...response.data.CommentList,...response.data.CommentList,...response.data.CommentList]
//               dispatch(setContractStatus(response.data.CommentList,response.data.ContractStatus,response.data.ReportType,approver));
//               // dispatch(setContractStatus(response.data.CommentList,"PA",response.data.ReportType,approver));
//               //getUserDetail();

//               let obj={
//                 CabinetName: store.getState().interactiveEditor.cabinetName,
//                 SessionId:  store.getState().interactiveEditor.sessionId,
//               }
//               //return (dispatch) => {
//               axios.post("getUserDetails", obj).then((response) => {
//                 if( parseInt(response.data.Status) === 0){
//                   //  dispatch(setSuccessState(true,successMessage));
//                   dispatch(setUserName(response.data.UserName));
//                 }
//                 else if(parseInt(response.data.Status) === 11)
//                 {
//                   dispatch(setErrorState(true,i18n.t("INVALID_SESSION")));
//                   return;
//                 }
//                 // dispatch(setGenerateState(true));
//               })
//               .catch((error) => {
//               dispatch(setLogoutState(true));
//               });
//         })
//         .catch((error) => {
//           dispatch(setErrorState(true,errorMessage));
//           dispatch(setLogoutState(true));
//         });
//   };
// };


// export const setOpenError = (err) => {
//   return {
//     type:  actionTypes.OPEN_ERROR ,
//     open: true,
//     error:err
//   };
// }

