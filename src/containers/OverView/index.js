import React from "react";
import "./styles.css";
import {OverviewBox, Conversion, Wallet, Statistics, Users, Transaction} from "../../containers";
import { CalenderIcon } from "../../assets/svgs";



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
