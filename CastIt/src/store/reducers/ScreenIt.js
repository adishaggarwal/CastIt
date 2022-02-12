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
  "userRegisterationId": -1,
  "userEmail": "",
  "userFirstName": "",
  "userLastName": "",
  "userDOB": "",
  "userRegistereAs": "",
  directorUpdateFormId:"",
  showForm:"none",
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
            case actionTypes.SET_DIRECTORACTIVE_POSTS:
            return {
              ...state,
              directorActivePosts:action.value
            };
            case actionTypes.SET_DIRECTORUPDATE_FORMID:
            return {
              ...state,
              directorUpdateFormId:action.value
            };
     
    default:
      return state;
  }
};

export default ScreenItreducer;
