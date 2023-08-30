import React from 'react'
import './User.css'
import Agent from "../../Images/Agent.png";
import { DotIcon } from "../../Images/Svgs/DotIcon";


export default function Users() {
  return (
    <div className="users">
        <div className="u-titlebar">
            <h1 className="u-title">Users</h1>
            <DotIcon/>
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
                <DotIcon/>
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
                <DotIcon/>
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
                <DotIcon/>
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
                <DotIcon/>
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
                <DotIcon/>
                </div>
            </div>
        </div>
        
        <div className="view-btn">

        <button className="view-more">View More</button>
        </div>
    </div>
  )
}
