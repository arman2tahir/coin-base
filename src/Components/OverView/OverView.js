import React from "react";
import "./OverView.css";
import OverviewBox from "../OverViewBox/OverviewBox";
import Conversion from '../Conversion/Conversion';
import Wallet from '../Wallet/Wallet';
import Statistics from '../Statistics/Statistics';
import Users from '../Users/Users';
import Transaction from '../Transaction/Transaction';



export default function OverView(props) {
  return (
    <>
    <div className="overview">

    <div className="overview-bar">
      <h1 className="o-title">Overview</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M19 2.82568H0.75V20.1632H19V2.82568Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M0.75 7.38818H19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.3125 1V4.65" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.4375 1V4.65" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.1377 13.0786L9.50344 15.6L12.6127 10.125" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>

    <div className="boxes">
    <OverviewBox numbers='15000' totalNumbers="Users" percentage="22.8"/>
    <OverviewBox numbers='43498' totalNumbers="Trade" percentage="11.8"/>
    <OverviewBox numbers='24642' totalNumbers="Transaactions" percentage="11.8"/>
    </div>
    </div>
    <Conversion/>
    <Wallet/>
    <Statistics/>
    <Users/>
    <Transaction/>
    </>
  );
}
