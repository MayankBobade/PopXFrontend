import React from "react";
import "./styles/account.css";
import { useUser } from "./userContext.js";

export const Account = () => {
  const { user } = useUser();

  return (
    <div className="accountContainer">
      <h3 className="accountHeader">Account Settings</h3>

      <div className="profileSection">
        <div className="profileImage">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#8246f3" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="4" fill="#8246f3" />
            <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" fill="#8246f3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="profileInfo">
          <div className="profileName">User1234</div>
          <div className="profileEmail">{user?.email || "N/A"}</div>
          <p className="profileBio">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </div>
    </div>
  );
};
