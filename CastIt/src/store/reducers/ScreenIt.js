import * as actionTypes from "../actionTypes";
import img1 from '../../assets/images/bg3.jpg';

const initialState = {
  // errorState:false,
  // brownerrorMsg:"",
  // tabType:"data",
  // pdfFinalBase64:"",
  // isXmlData:true,
  // users:[],
  // productName: !(window.location.href.includes(":3000"))?'':"DEMAND",
  userRegisterationId: -1,
  userEmail: "",
  userFirstName: "",
  userLastName: "",
  userDOB: "",
  currentAccordianAppId:"",
  currentAccordianAppId2:"",
  isLoggedInDir:false,
  isLoggedInApp:false,
  userRegistereAs: "",
  directorUpdateFormId:"",
  applicantUpdateFormId:"",
  applicantFormId:"",
  showForm:"none", //none , applyjob , create , update
  listLoader:false,
  showAccordian:"",
  showAccordian2:"",
  percentage:0,
  showError:false,
  errormsg:"",
  matchedCandidates:[],
  showSuccess:false,
  succmsg:"",
  directorCloseCount:0,
  shortlistedCandidates:[],
  applicantAppliedPosts:[],
  applicantActivePosts:[],
  directorActivePosts:[
    // {
    //   movieName:"Spiderman",
    //   movieImage:img1,
    //   movieDesc:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU)."
    // },
    // {
    //   movieName:"Spiderman",
    //   movieImage:img1,
    //   movieDesc:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU)."
    // },
    // {
    //   movieName:"Spiderman",
    //   movieImage:img1,
    //   movieDesc:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU)."
    // },
    // {
    //   movieName:"Spiderman",
    //   movieImage:img1,
    //   movieDesc:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU)."
    // },
    // {
    //   movieName:"Spiderman",
    //   movieImage:img1,
    //   movieDesc:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU)."
    // }
  ]
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
            case actionTypes.SET_SHOW_FORM:
            return {
              ...state,
               showForm:action.value
            };
            case actionTypes.SET_SHORTLISTED_CANDIDATES:
            return {
              ...state,
               shortlistedCandidates:action.value
            };
            case actionTypes.SET_SHOW_ACCORDIAN:
            return {
              ...state,
               showAccordian:action.value
            };
            case actionTypes.SET_SHOW_ACCORDIAN2:
            return {
              ...state,
               showAccordian2:action.value
            };
            case actionTypes.SET_MATCHED_CANDIDATES:
            return {
              ...state,
              matchedCandidates:action.value
            };
            case actionTypes.GET_CURRENT_ACCORDIANAPP_ID:
            return {
              ...state,
              currentAccordianAppId:action.value
            };
            case actionTypes.GET_CURRENT_ACCORDIANAPP_ID2:
            return {
              ...state,
              currentAccordianAppId2:action.value
            };
            case actionTypes.SET_LIST_LOADER:
            return {
              ...state,
               listLoader:action.value
            };
            case actionTypes.DISPLAY_ERROR:
            return {
              ...state,
               showError:action.value,
               errormsg:action.msg
            };
            case actionTypes.DISPLAY_SUCCESS:
            return {
              ...state,
               showSuccess:action.value,
               succmsg:action.msg
            };
            case actionTypes.SET_DIRECTORACTIVE_POSTS:
            return {
              ...state,
              directorActivePosts:action.value,
              directorCloseCount:action.count
            };
            case actionTypes.SET_PERCENTAGE:
            return {
              ...state,
              percentage:action.value
            };
            case actionTypes.SET_APPLICANTACTIVE_POSTS:
            return {
              ...state,
              applicantActivePosts:action.value
            };
            case actionTypes.SET_APPLICANTAPPLIED_POSTS:
              return {
                ...state,
                applicantAppliedPosts:action.value
              };
            case actionTypes.SET_DIRECTORUPDATE_FORMID:
            return {
              ...state,
              directorUpdateFormId:action.value
            };
            case actionTypes.SET_LOGIN_DIRECTOR:
            return {
              ...state,
              isLoggedInDir:action.value
            };
            case actionTypes.SET_LOGIN_APPLICANT:
            return {
              ...state,
              isLoggedInApp:action.value
            };
            case actionTypes.SET_APPLICANTUPDATE_FORMID:
            return {
              ...state,
              applicantUpdateFormId:action.value
            };
            case actionTypes.SET_APPLICANT_FORMID:
            return {
              ...state,
              applicantFormId:action.value
            };
     
    default:
      return state;
  }
};

export default ScreenItreducer;
