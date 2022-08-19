import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { UserAuth } from "../../context/AuthContext";
import { TextField } from "@mui/material";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      // navigate("/Total");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-form">
      <div className="title">SignUp</div>
      <form className="sign" onSubmit={signUpHandler}>
        <div className="user-input">
          <TextField
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user-input">
          <TextField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type={"submit"}>SignUp</Button>
      </form>
      <div className="nav-text">
        Already have an Account?<Link to="/Login/SignIn">SignIn</Link>
      </div>
    </div>
  );
};

export default SignUp;
