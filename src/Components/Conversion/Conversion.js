import React from 'react'
import './Conversion.css'

export default function Conversion() {
  return (
    <div className='conversion'>
      <div className="c-titlebar">
        <h1 className='title'>Conversion Rate to Naira</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
            <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
            <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
            <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
        </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H13.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
      </div>
    </div>
  )
}
