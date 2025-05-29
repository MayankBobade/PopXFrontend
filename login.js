import React, { useState } from "react";
import './styles/login.css';
import { useNavigate } from "react-router-dom";
import { useUser } from "./userContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      setUser({ email }); 
      navigate("/Account");
    }
  };

  return (
    <>
      <div className="heading">
        <b>Signin to your <br /> PopX Account</b>
      </div>

      <div className="loginText">Please enter the following credentials to login</div>

      <div className="loginDetails">
        <label>Email address<span>*</span></label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="loginDetails">
        <label>Password<span>*</span></label>
        <input type="password" placeholder="Enter Your Password" />
      </div>

      <button id="loginn" onClick={handleLogin}>Login</button>
    </>
  );
};
