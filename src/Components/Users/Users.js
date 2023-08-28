import React from 'react'
import './User.css'
import Agent from "../../Images/Agent.png";

export default function Users() {
  return (
    <div className="users">
        <div className="u-titlebar">
            <h1 className="u-title">Users</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
            </svg>
        </div>

        <div className="u-table-top">
            <p>Account Status</p>
            <p>User Name</p>
            <p>Email</p>
            <p>Action</p>
        </div>
        {/* User table  */}
        <div className="u-table-content">
            <div className="u-table-inner">
                <div className="status-btn btn-active">
                    <button>Active</button>
                </div>
                <div className="u-account">
                    <img src={Agent} alt="Agent" />
                    <p className='name'>Ramon Ridwan</p>
                </div>
                <p className="email">Ramonridwan@protonmail.com</p>
                <div className="u-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                        <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="u-table-inner">
                <div className="status-btn btn-down">
                    <button>Down</button>
                </div>
                <div className="u-account">
                    <img src={Agent} alt="Agent" />
                    <p className='name'>Ramon Ridwan</p>
                </div>
                <p className="email">Ramonridwan@protonmail.com</p>
                <div className="u-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                        <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="u-table-inner">
                <div className="status-btn btn-active">
                    <button>Active</button>
                </div>
                <div className="u-account">
                    <img src={Agent} alt="Agent" />
                    <p className='name'>Ramon Ridwan</p>
                </div>
                <p className="email">Ramonridwan@protonmail.com</p>
                <div className="u-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                        <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="u-table-inner">
                <div className="status-btn btn-pending">
                    <button>Pending</button>
                </div>
                <div className="u-account">
                    <img src={Agent} alt="Agent" />
                    <p className='name'>Ramon Ridwan</p>
                </div>
                <p className="email">Ramonridwan@protonmail.com</p>
                <div className="u-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                        <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="u-table-inner">
                <div className="status-btn btn-active">
                    <button>Active</button>
                </div>
                <div className="u-account">
                    <img src={Agent} alt="Agent" />
                    <p className='name'>Ramon Ridwan</p>
                </div>
                <p className="email">Ramonridwan@protonmail.com</p>
                <div className="u-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                        <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div className="view-btn">

        <button className="view-more">View More</button>
        </div>
    </div>
  )
}
