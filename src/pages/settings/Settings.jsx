import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import notification from "../../image/Vector.png";
import dot from "../../image/Dot.png";
import downarrow from "../../image/downarrow.png";
import { MdAccountCircle } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";
import "./Settings.css";

const SellItems = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="container1">
          <div className="curve"></div>
          <div className="topbar">
            <div className="notification">
              <img src={notification} alt="" />
              <img className="dot" src={dot} alt="" />
              <img className="downarrow" src={downarrow} alt="" />
            </div>
            <div className="profile">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="pp"
              />
              <div className="person">
                <p>Sajal</p>
                <p>admin</p>
              </div>
            </div>
          </div>
          <div>
            <div className="myaccount">
              <p>
                <MdAccountCircle className="myaccounticon" />
                My Account
              </p>
            </div>
            <div className="darkmode">
              <p>
                <BsFillMoonFill className="darkmodeicon" />
                Dark mode
              </p>
            </div>
            <div className="logout">
              <p><ImSwitch className="logouticon"/>
              Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItems;
