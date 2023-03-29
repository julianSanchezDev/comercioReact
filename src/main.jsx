import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVr2oKWBDRxcm6kcxV2soAVZ1WTsOeai0",
  authDomain: "proyecto-final-b4d41.firebaseapp.com",
  projectId: "proyecto-final-b4d41",
  storageBucket: "proyecto-final-b4d41.appspot.com",
  messagingSenderId: "104319538166",
  appId: "1:104319538166:web:1d7c96d0552152dee62dd7"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  
     
          <App /> 
  
)
