import React, { Component } from 'react';
import "./App.css";
// import Key from "./secret.env"
import 'whatwg-fetch'

class Delivery extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //   };

  // }
  componentDidMount() {
    fetch('https://api.postmates.com/v1/customers/cus_LkrbfbqIW1GjLk/delivery_quotes', {
      method: 'POST',
        headers: {
          'Authorization': 'c0b1d99e-1d09-41e5-b4db-1ae82f80877a'
         },
       body: JSON.stringify({
          pickup_address: '1255 Sansome Street, San Francisco, CA',
          dropoff_address: '400 Folsom Street, San Francisco, CA',
   })
    //    .then(results => {
    //   console.log(results)
    //   return results.json();
    // })
  })
    // .then(data => {
      // let delivery = data.results.map(dat) => {
      //   return(
      //     <div key={dat.results}>
          }

  render() {
    return (
      <h1>Hi</h1>
    )}

}
  // })

// })
// }
export default Delivery;