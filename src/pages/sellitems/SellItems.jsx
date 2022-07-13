import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import notification from "../../image/Vector.png";
import dot from "../../image/Dot.png";
import downarrow from "../../image/downarrow.png";
import "./SellItems.css";

const SellItems = () => {
  const data = [
    {
      product: "A",
      quantity: 2,
      price: 100,
      discount: 20,
      total: 200,
    },
    {
      product: "A",
      quantity: 2,
      price: 100,
      discount: 20,
      total: 200,
    },
    {
      product: "A",
      quantity: 2,
      price: 100,
      discount: 20,
      total: 200,
    },
    {
      product: "A",
      quantity: 2,
      price: 100,
      discount: 20,
      total: 200,
    },
    {
      product: "A",
      quantity: 2,
      price: 100,
      discount: 20,
      total: 200,
    },
    {
      product: "A",
      quantity: 2,
      price: 100,
      discount: 20,
      total: 200,
    },
  ];
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
            <div className="tables">
              <div className="table1">
                <table class="table table-bordered">
                  <thead style={{ backgroundColor: "#EEEDE7" }}>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Total Rs</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      maxHeight: "clamp(5em,10vh,250px)",
                      overflow: "auto",
                    }}
                  >
                    {data?.map((d) => (
                      <tr>
                        <td>{d.product}</td>
                        <td>{d.quantity}</td>
                        <td>{d.price}</td>
                        <td>{d.discount}</td>
                        <td>{d.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table2">
                <table class=" table-x table-bordered">
                  <thead>
                    <tr>
                      <th
                        style={{ backgroundColor: "#EEEDE7" }}
                        class="text-center"
                        scope="col"
                      >
                        Product
                      </th>
                      <td class="text-center">Rs.300 </td>
                    </tr>
                    <tr>
                      <th
                        style={{ backgroundColor: "#EEEDE7" }}
                        class="text-center"
                        scope="col"
                      >
                        Quantity
                      </th>
                      <td class="text-center">200</td>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItems;
