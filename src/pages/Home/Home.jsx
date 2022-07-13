import React from "react";
import { BsSearch } from "react-icons/bs";
import HistoryItem from "../../Components/transaction history/history";

const Home = () => {
  return (
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
  );
};

export default Home;
