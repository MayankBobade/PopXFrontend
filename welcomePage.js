import React from "react";
import ReactDom from "react-dom/client";
import './styles/welcomepage.css';
import { Link } from "react-router-dom";



export const Welcome=()=>{
  return(

    <>
    <div className="welcomeContainer">
      <b>Welcome to PopX</b>
      <div id="welcomeSentence">We are pleased to have you</div>
      <div className="WelcomeButtons">
         
          <button id="createAccount"> <Link to="/createAccount"> Create Account </Link></button>
  
          <button id="login"> <Link to="/login"> Already Registered?Login </Link></button>
      </div>
      </div>
    </>
  
  )
}