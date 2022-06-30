import React from "react";

const HistoryItem = ({ itemName, itemQty, status, time }) => {
  return (
    <>
      <div className="item">
        <div className="left">
          <p className="item-name">{itemName}</p>
          <p className="item-qty">{itemQty}</p>
        </div>
        <div className="right">
          <p className="status">{status}</p>
          <p className="time">{time}</p>
        </div>
      </div>
    </>
  );
};

export default HistoryItem;
