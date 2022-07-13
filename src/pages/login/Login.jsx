import React from "react";
import "./Login.css";
import downarrow from "../../image/downarrow.png";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { RiLockFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="main-container">
      <div className="top-bar">
        <div className="avatar">
          <BsPersonCircle />
          <img src={downarrow} alt="" />
        </div>
        <div className="language">eng/nep</div>
      </div>
      <div className="login-container">
        <div className="login">
          <BsPersonCircle />
          <div className="form">
            <div className="login-form">
              <div className="inputs">
                <div className="input">
                  <BsFillPersonFill />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                  <RiLockFill />
                  <input type="password" placeholder="*******" />
                </div>
              </div>
              <div className="forgot">
                <div className="checkbox">
                  <input type="checkbox" name="remember me" id="" />
                  <p>Rember me</p>
                </div>
                <div className="forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
