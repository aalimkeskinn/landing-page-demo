import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Customers from "./Customers";
import Pricing from "./Pricing";
import logo from '../logo.png';


 
class Main1 extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
            <div className="topbar">Weekly Virtual COVID-19 QAs: Hosted by Ecommerce Operators  Founders. Join the next call.</div> 
         <div className="nav-bar">
             <div className="logo"><img src={logo}></img> </div>          
         
         
        
            <div className="main-menu">
             <ul className="header">
              <li><NavLink exact to="/">Product</NavLink></li>

              <li><NavLink to="/customers">Customers</NavLink></li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
             </ul>
            </div>


             <div className="right-menu">
              <ul className="header">
               <li><NavLink to="/login">Log In</NavLink></li>
               <button className="box"><NavLink to="/getstarted">Get Started</NavLink></button>
               </ul>
          
             </div>
         </div>
        
          <div>
            <Route  exact path="/" component={Home}/>
            <Route  path="/customers" component={Customers}/>
            <Route  path="/pricing" component={Pricing}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main1;