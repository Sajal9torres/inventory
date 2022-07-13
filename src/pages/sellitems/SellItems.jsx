import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import notification from "../../image/Vector.png";
import dot from "../../image/Dot.png";
import downarrow from "../../image/downarrow.png";
import "./SellItems.css";
import { BiSave } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { BsFillPrinterFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

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
  const data2 = [
    { Product: "A", Quantity: 2, Price: 100 },
    { Product: "A", Quantity: 2, Price: 100 },
    { Product: "A", Quantity: 2, Price: 100 },
    { Product: "A", Quantity: 2, Price: 100 },
    { Product: "A", Quantity: 2, Price: 100 },
    { Product: "A", Quantity: 2, Price: 100 },
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
          <div className="main-1">
            <div className="left">
              <div className="data">
                <p>Date:-</p>
                <p>Invoice Number:-</p>
              </div>
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
                  <table class=" table-x table table-bordered">
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
                      <tr>
                        <th
                          style={{ backgroundColor: "#EEEDE7" }}
                          class="text-center"
                          scope="col"
                        >
                          Due Amount
                        </th>
                        <td class="text-center">Rs.50 </td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="buttons">
                <div className="button">
                  <button className="btn btn-x">
                    Save <BiSave />
                  </button>
                </div>
                <div className="button">
                  <button className="btn btn-x">
                    download <HiDownload />
                  </button>
                </div>
                <div className="button">
                  <button className="btn btn-x">
                    Print <BsFillPrinterFill />
                  </button>
                </div>
                <div className="button">
                  <button className="btn btn-x">
                    Close <ImCross />
                  </button>
                </div>
              </div>
            </div>
            <div className="right1">
              <div className="right-table">
                <p>Preview</p>
                <div className="rt-table">
                  <p>Shopping Center</p>
                  <p>Address</p>
                  <table class="table table-borderless table-y">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data2.map((i) => (
                        <tr>
                          <td>{i.Product}</td>
                          <td>{i.Quantity}</td>
                          <td>{i.Price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="total">
                    <p>Total=</p>
                  </div>
                  <div className="preview-contact">
                    <p>Contacts:-</p>
                    <p>9890988889</p>
                    <p>9890988889</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItems;
