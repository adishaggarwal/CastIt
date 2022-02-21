import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
// import SessionChecker from "./shared/SessionChecker";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// import 'bootstrap/dist/css/bootstrap.css';
// import "./ReactotronConfig";
// import registerServiceWorker from "./registerServiceWorker";



ReactDOM.render(
  <Provider store={store}>
  <Suspense fallback={() => <div>Loading...</div>}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Suspense>
</Provider>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
