import React from 'react';
import './featured.css';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top-feature">
        <h1 className="title-feature">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom-feature">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="feature-title">Total sales made</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transaction processing. Please wait for the next transaction.
        </p>
        <div className="summary">
          <div className="itemFeature">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"  />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="itemFeature">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$23.7k</div>
            </div>
          </div>
          <div className="itemFeature">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"  />
              <div className="resultAmount">$45.9k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured