import React from "react";
import "./OverView.css";
import OverviewBox from "../OverViewBox/OverviewBox";
import Conversion from '../Conversion/Conversion';
import Wallet from '../Wallet/Wallet';
import Statistics from '../Statistics/Statistics';
import Users from '../Users/Users';
import Transaction from '../Transaction/Transaction';
import { CalenderIcon } from "../../Images/Svgs/CalenderIcon";



export default function OverView(props) {
  return (
    <>
    <div className="overview">

    <div className="overview-bar">
      <h1 className="o-title">Overview</h1>
      <CalenderIcon />
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
