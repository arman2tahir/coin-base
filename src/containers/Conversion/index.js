import React from 'react'
import './styles.css'
import {DotIcon, StraightArrow} from "../../assets/svgs"

export default function Conversion() {
  return (
    <div className='conversion'>
      <div className="c-titlebar">
        <h1 className='title'>Conversion Rate to Naira</h1>
        <DotIcon />
      </div>
      
      <div className="table-topbar">
        <p>iTunes Card</p>
        <p></p>
        <p>Amazon Card</p>
        <p></p>
        <p>Bitcoin</p>
        <p></p>
        <p></p>
      </div>

      <div className="table-text">
        <div className="table-content">
            <p>USA Physical</p>
            <p>USA E-Code card</p>
            <p>UK Physical Card</p>
            <p>UK E-Code Card</p>
        </div>
        <div className="table-content">
            <p>N400.00</p>
            <p>N400.00</p>
            <p>N400.00</p>
            <p>N400.00</p>
        </div>
        <div className="table-content">
            <p>USA Physical</p>
            <p>USA E-Code card</p>
            <p>UK Physical Card</p>
            <p>UK E-Code Card</p>
        </div>
        <div className="table-content">
            <p>N400.00</p>
            <p>N400.00</p>
            <p>N400.00</p>
            <p>N400.00</p>
        </div>
        <div className="table-content">
            <p>Bitcoin BTC</p>
            <p>Bitcoin BTC</p>
            <p>Bitcoin BTC</p>
            <p>Bitcoin BTC</p>
        </div>
        <div className="table-content">
            <p>N400.00</p>
            <p>N400.00</p>
            <p>N400.00</p>
            <p>N400.00</p>
        </div>
        <div className="table-content">
            <div className="circle-arrow">
                <StraightArrow />
            </div>
        </div>
      </div>
    </div>
  )
}
