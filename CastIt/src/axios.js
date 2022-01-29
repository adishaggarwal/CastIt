import axios from "axios";

const host = window.location.href.split("CastIt")[0];
const instance = axios.create({
  baseURL: !window.location.href.includes(":3000")
    ? host + "CastIt/rest/OMSAdminServices/"
    : "http://localhost:8080/OMSAdminConsole/rest/OMSAdminServices/",

  // //For development mode
  // baseURL:'http://localhost:8080/OMSAdminConsole/rest/OMSAdminConsole/'

  // //For production build
  // // baseURL: host + 'OMSAdminConsole/rest/OMSAdminServices/'
});

export default instance;
