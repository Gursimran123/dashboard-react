import React from 'react';
import './single.css';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top-container">
          <div className="left-container">
            <div className="editButton">Edit</div>
            <h1 className="title-name">Information</h1>
            <div className="item-single">
              <img
                src="https://www.kindpng.com/picc/m/22-224232_picture-of-from-avatar-with-no-background-zuko.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="item-title">Gursimran Singh</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">guri123@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 7763454378</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Gurugram, Haryana</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom-container">
          <h1 className="title-name">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single