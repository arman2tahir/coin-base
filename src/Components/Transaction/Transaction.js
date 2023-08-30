import React from "react";
import "./Transaction.css";
import { DotIcon } from "../../Images/Svgs/DotIcon";
import { BitCoinIcon } from "../../Images/Svgs/BitCoinIcon";
import { CardIcon } from "../../Images/Svgs/CardIcon";

export default function Transaction() {
  return (
    <div className="transaction">
      <div className="t-titlebar">
        <h1 className="t-title">Transactions</h1>
        <DotIcon />
      </div>

      <div className="t-table-top">
        <p>Account Status</p>
        <p>User Name</p>
        <p>Email</p>
        <p>Action</p>
        <p>Action</p>
        <p>Action</p>
        <p>Action</p>
        <p>Action</p>
      </div>

      <div className="t-table-content">
        <div className="t-table-inner">
          <p>14/01/2019</p>
          <p>12345678</p>
          <p>
            <BitCoinIcon />
          </p>
          <p>Bitcoin</p>
          <p>$100</p>
          <p>#18000</p>
          <div className="t-status-btn btn-active">
            <button>Completed</button>
          </div>
          <div className="u-dots">
            <DotIcon />
          </div>
        </div>

        <div className="t-table-inner">
          <p>14/01/2019</p>
          <p>12345678</p>
          <p>
            <CardIcon />
          </p>
          <p>Amazon</p>
          <p>$100</p>
          <p>#18000</p>
          <div className="t-status-btn btn-down">
            <button>Failed</button>
          </div>
          <div className="u-dots">
            <DotIcon />
          </div>
        </div>

        <div className="t-table-inner">
          <p>14/01/2019</p>
          <p>12345678</p>
          <p>
            <BitCoinIcon />
          </p>
          <p>Bitcoin</p>
          <p>$100</p>
          <p>#18000</p>
          <div className="t-status-btn btn-active">
            <button>Completed</button>
          </div>
          <div className="u-dots">
            <DotIcon />
          </div>
        </div>

        <div className="t-table-inner">
          <p>14/01/2019</p>
          <p>12345678</p>
          <p>
            <CardIcon />
          </p>
          <p>Bitcoin</p>
          <p>$100</p>
          <p>#18000</p>
          <div className="t-status-btn btn-pending">
            <button>In Progress</button>
          </div>
          <div className="u-dots">
            <DotIcon />
          </div>
        </div>
      </div>
      <div className="view-btn">
        <button className="view-more">View More</button>
      </div>
    </div>
  );
}
