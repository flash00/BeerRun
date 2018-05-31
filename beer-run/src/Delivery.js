import React, { Component } from 'react';
import "./App.css";
// import Key from "./secret.env"
import 'whatwg-fetch'
import 'cors'

class Delivery extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const proxyurl = "https://cryptic-headland-94862.herokuapp.com/";
    const url = "https://api.postmates.com/v1/customers/cus_LkrbfbqIW1GjLk/delivery_quotes";
    fetch(proxyurl + url, {
      method: 'POST',
        headers: {
          'Authorization': 'c0b1d99e-1d09-41e5-b4db-1ae82f80877a',
         },
       body: JSON.stringify({
          pickup_address: '1255 Sansome Street, San Francisco, CA',
          dropoff_address: '400 Folsom Street, San Francisco, CA',
   })
    }).then(results => {
      console.log(results)

  })
    // .then(data => {
      // let delivery = data.results.map(dat) => {
      //   return(
      //     <div key={dat.results}>
          }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
      </div>
    )}

}
  // })

// })
// }
export default Delivery;