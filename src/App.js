import './App.css';
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import OverView from './Components/OverView/OverView'
import Wallet from './Components/Wallet/Wallet';
import Statistics from './Components/Statistics/Statistics';
import Users from './Components/Users/Users';
import Transaction from './Components/Transaction/Transaction';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Header/>
    <SideBar/>
    <div className="container">
    <div className='containter-bar'>
      <pre className="left-sdie">Agent Management    System Overview</pre>
      <div className="right-side">
        <p className="account">Accounts</p> | 
        <p className="account">AGENT ROSE</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.29102 0L9.79102 5H0.791016L5.29102 0Z" fill="white"/>
        </svg>
      </div>
    </div>
      <Routes>
        <Route path='/' Component={OverView} />
        <Route path='/wallet' Component={Wallet} />
        <Route path='/trade' Component={OverView} />
        <Route path='/statistics' Component={Statistics} />
        <Route path='/users' Component={Users} />
        <Route path='/transaction' Component={Transaction} />
        <Route path='/settings' Component={OverView} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
