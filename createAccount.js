import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import "./styles/CreateAccount.css";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.fullName || form.fullName.length > 64) {
      newErrors.fullName = "Full Name is required and must be less than 64 characters.";
    }

    if (!form.phone || !/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number with only digits (10–15 digits).";
    }

    if (!validator.isEmail(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!validator.isStrongPassword(form.password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      newErrors.password = "Password must be strong: 8+ chars with upper/lowercase, number, and symbol.";
    }

    if (!form.agency) {
      newErrors.agency = "Please select if you are an agency.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? e.target.value : value;
    setForm((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    console.log("Form submitted:", form);
    navigate("/Account"); // ✅ Now navigate only if validation passed
  }
};

  return (
    <div className="createAccount page">
      <form className="acctualPage" onSubmit={handleSubmit}>
        <div className="logintext">
          <b>Create your<br />PopX account</b>
        </div>

        <div className="loginDetails">
          <label>Full Name<span>*</span></label>
          <input
            type="text"
            name="fullName"
            placeholder="As on Passport"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="loginDetails">
          <label>Phone number<span>*</span></label>
          <input
            type="tel"
            name="phone"
            placeholder="Start with country code"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="loginDetails">
          <label>Email address<span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="All smaller case"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="loginDetails">
          <label>Password<span>*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter Strong Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="loginDetails">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Educase India"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="loginDetails">
          <label>Are you an Agency?<span>*</span></label>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" value="Yes" onChange={handleChange} /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="No" onChange={handleChange} /> No
            </label>
          </div>
          {errors.agency && <p className="error">{errors.agency}</p>}
        </div>

        <div className="createButton">
          <button type="submit">Create Account</button>
          </div>

      </form>
    </div>
  );
};

export default CreateAccount;
