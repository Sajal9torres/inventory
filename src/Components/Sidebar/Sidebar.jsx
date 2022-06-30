import React from "react";
import "./sidebar.css";
import {
  MdDashboard,
  MdSell,
  MdOutlineStorefront,
  MdSettings,
} from "react-icons/md";
import { BsFillBagCheckFill, BsFillTelephoneFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menus">
        <div className="menu">
          <MdDashboard />
          Dashbaord
        </div>
        <div className="menu">
          <BsFillBagCheckFill />
          Sell Item
        </div>
        <div className="menu">
          <MdSell />
          Purchase Item
        </div>
        <div className="menu">
          <MdOutlineStorefront />
          My Stock
        </div>
        <div className="menu">
          <MdSettings />
          Settings
        </div>
      </div>
      <div className="contact">
        <p>Contact:</p>
        <div>
          <BsFillTelephoneFill />
          9890988889
        </div>
        <div>
          <BsFillTelephoneFill />
          9890988889
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
