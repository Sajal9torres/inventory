import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import notification from "../../image/Vector.png";
import dot from "../../image/Dot.png";
import downarrow from "../../image/downarrow.png";

import "./dashboard.css";
import { BsSearch } from "react-icons/bs";
import HistoryItem from "../../Components/transaction history/history";

function Dashboard() {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="container">
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
          <div className="content">
            <div className="transation">
              <div className="transaction-history">
                <p className="transaction-title">Transaction History</p>
                <div className="items">
                  <div className="item">
                    <div className="left">
                      <select className="select-box" name="Recent" id="">
                        <option value="recent">Recent</option>
                      </select>
                    </div>
                    <div className="right">
                      <div className="search">
                        <input
                          className="search-field"
                          type="search"
                          name=""
                          id=""
                          placeholder="Invoice No"
                        />
                        <BsSearch className="icon" />
                      </div>
                    </div>
                  </div>
                  <HistoryItem
                    itemName="RGB Color"
                    itemQty={100}
                    status="Sold"
                    time="10:30 pm"
                  />
                  <HistoryItem
                    itemName="RB Color"
                    itemQty={100}
                    status="Sold"
                    time="10:30 pm"
                  />
                  <HistoryItem
                    itemName="RGB Color"
                    itemQty={100}
                    status="Sold"
                    time="10:30 pm"
                  />
                  <HistoryItem
                    itemName="RGB Color"
                    itemQty={100}
                    status="Sold"
                    time="10:30 pm"
                  />
                  <HistoryItem
                    itemName="RGB Color"
                    itemQty={100}
                    status="Sold"
                    time="10:30 pm"
                  />
                  <HistoryItem
                    itemName="RGB Color"
                    itemQty={100}
                    status="Sold"
                    time="10:30 pm"
                  />
                </div>
              </div>
            </div>
            <div className="charts"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
