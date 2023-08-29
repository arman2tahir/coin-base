import React from 'react'
import './Statistics.css'

export default function Statistics() {
  return (
    <div className="statistics">
        <div className="s-titlebar">
            <h1 className="s-title">Statistics</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="white"/>
                <path d="M7.99954 3.73333C6.96861 3.73333 6.13288 2.8976 6.13288 1.86667C6.13288 0.835735 6.96861 0 7.99954 0C9.03048 0 9.86621 0.835735 9.86621 1.86667C9.86621 2.8976 9.03048 3.73333 7.99954 3.73333Z" fill="white"/>
                <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="white"/>
            </svg>
        </div>
        <h2 className="project-name">My Own Project</h2>

        <div className="bars">
            <div className="bar-numbers">
                <p>60</p>
                <p>50</p>
                <p>40</p>
                <p>30</p>
                <p>20</p>
                <p>10</p>
            </div>
            <div className="bar-lines">
                <div className="lines-inner"><p className='Amazon'></p></div>
                <div className="lines-inner"><p className='Google'></p></div>
                <div className="lines-inner"><p className='iTunes'></p></div>
                <div className="lines-inner"><p className='Payoneer'></p></div>
                <div className="lines-inner"><p className='Bitcoin'></p></div>
                <div className="lines-inner"><p className='Ethereum'></p></div>
                <div className="lines-inner"><p className='Tecno'></p></div>
                <div className="lines-inner"><p className='Paypal'></p></div>
                <div className="lines-inner"><p className='Aliexpress'></p></div>
                <div className="lines-inner"><p className='Konga'></p></div>
                <div className="lines-inner"><p className='Jumia'></p></div>
            </div>
        </div>

        <div className="bars-2">
            <div className="height">
            </div>
            <div className="bar-text">
                <p>Amazon</p>
                <p>Google</p>
                <p>iTunes</p>
                <p>Payoneer</p>
                <p>Bitcoin</p>
                <p>Ethereum</p>
                <p>Tecno</p>
                <p>Paypal</p>
                <p>Aliexpress</p>
                <p>Konga</p>
                <p>Jumia</p>
            </div>
        </div>
        <div className="box-main">
            <div className="bars-box">
                <h4>Avarage score</h4>
                <p>146/217</p>
                <div className='progress-line'>
                    <div className="line"></div>
                </div>
            </div>
        <div className="box-images">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z" fill="url(#paint0_linear_1_1453)"/>
                <defs>
                    <linearGradient id="paint0_linear_1_1453" x1="19.8" y1="-5.66667" x2="21.8311" y2="58.1066" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--gradient-pink)"/>
                        <stop offset="1" stopColor="var(--gradient-blue)"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="url(#paint0_linear_1_1454)"/>
                <defs>
                    <linearGradient id="paint0_linear_1_1454" x1="9.9" y1="-2.83333" x2="10.9155" y2="29.0533" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--gradient-pink)"/>
                        <stop offset="1" stopColor="var(--gradient-blue)"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59Z" fill="url(#paint0_linear_1_1452)"/>
                <defs>
                    <linearGradient id="paint0_linear_1_1452" x1="32.45" y1="-9.28704" x2="35.7787" y2="95.2302" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--gradient-pink)"/>
                        <stop offset="1" stopColor="var(--gradient-blue)"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
            
        </div>
    </div>
  )
}
