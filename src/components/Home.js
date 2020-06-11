import React, { Component } from "react";
import hero from '../hero.png';
 
class Home extends Component {
  render() {
    return (
      <div> 
        <div className="test1">
        <h2>How ShipBob works </h2>
        <p>ShipBob is a tech-enabled 3PL. We use our proprietary software across our fulfillment network for a cohesive experience. Orders are automatically sent to our warehouses, where inventory is picked, packed, and shipped to your customers.</p>
        
        <p>Our fulfillment services help you optimize for time and cost, use the delivery experience to beat customer expectations, and own more of the customer relationship.</p>
        <button>Request a Fullfill Queto</button>
        </div>
        <div className="test2"><img src={hero}></img></div>
        <div id="asagi" className="test3">
        Streamlined fulfillment from your online store to your customer’s door

        </div>
        
      </div>
    );
  }
}
 
export default Home;