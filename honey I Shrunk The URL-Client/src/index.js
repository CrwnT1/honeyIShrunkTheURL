import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApgLioIwu9WpK-xleYqvysOGOAR-WbYGM",
  authDomain: "honey-i-shrunk-the-url.firebaseapp.com",
  projectId: "honey-i-shrunk-the-url",
  storageBucket: "honey-i-shrunk-the-url.appspot.com",
  messagingSenderId: "205182241092",
  appId: "1:205182241092:web:434d967d1e7171981d2f11",
  measurementId: "G-JE25Y44V79"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
