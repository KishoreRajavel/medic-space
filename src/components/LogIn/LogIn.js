import React from "react";
import "./LogIn.css";
import BG from "../../Assets/login_bg_img.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="bg-img">
        <img src={BG} alt="bg" />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
