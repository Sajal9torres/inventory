import React from "react";
import "./sidebar.css";
import {
  MdDashboard,
  MdSell,
  MdOutlineStorefront,
  MdSettings,
} from "react-icons/md";
import { BsFillBagCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menus">
        <NavLink
          id="menu"
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <MdDashboard />
          Dashbaord
        </NavLink>
        <NavLink
          id="menu"
          to="/sellitems"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <BsFillBagCheckFill />
          Sell Item
        </NavLink>
        <NavLink
          id="menu"
          to="/purchaseitem"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <MdSell />
          Purchase Item
        </NavLink>
        <NavLink
          id="menu"
          to="/mystock"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <MdOutlineStorefront />
          My Stock
        </NavLink>
        <NavLink
          id="menu"
          to="/settings"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <MdSettings />
          Settings
        </NavLink>
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
