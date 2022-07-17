import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import notification from "../../image/Vector.png";
import dot from "../../image/Dot.png";
import downarrow from "../../image/downarrow.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./Mystock.css";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiRefresh } from "react-icons/hi";

const Mystock = () => {
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
            <div className="Stock-search1">
              <div className="search1">
                <input
                  className="search-field1"
                  type="search"
                  name=""
                  id=""
                  placeholder=""
                />
                <AiOutlineSearch className="stock-icon1" />
              </div>
            </div>
            <div className="purchase-tables">
              <table class="table table-bordered mt-3 ">
                <thead>
                  <tr className="mystock-header">
                    <th scope="col">S.No</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>A</td>
                    <td>100</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="purchase-buttons2">
            <div className="purchase-buttons1">
              <button className="btn btn-1">
                Save <BiSave />
              </button>
            </div>
            <div className="purchase-buttons1">
              <button className="btn btn-1">
                Delete <AiFillDelete />
              </button>
            </div>
            <div className="purchase-buttons1">
              <button className="btn btn-1">
                Add <BsFillPlusCircleFill />
              </button>
            </div>
            <div className="purchase-buttons1">
              <button className="btn btn-1">
                Update <HiRefresh />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mystock;
