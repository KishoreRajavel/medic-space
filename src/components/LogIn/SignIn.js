import React, { useState } from "react";
import "./LogIn.css";
import Button from "../../UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { TextField } from "@mui/material";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { user, signIn } = UserAuth();

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/Total");
    } catch (err) {
      setError(() => true);
    }
  };

  return (
    <div className="login-form">
      <div className="title">SignIn</div>
      <form className="sign" onSubmit={signInHandler}>
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
        {error && (
          <div className="error">Username or Password is not valid</div>
        )}
        <Button type={"submit"}>SignIn</Button>
      </form>
      <div className="nav-text">
        Don't have an Account?<Link to="/Login/SignUp">SignUp</Link>
      </div>
    </div>
  );
};

export default SignIn;
