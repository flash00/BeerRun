import React, { Component } from 'react';
import "./App.css";
import Key from "./secret.env"
import fetch from 'whatwg-fetch'

class Delivery extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

  }
componentDidMount( {
  fetch('https://api.postmates.com/v1/customers/cus_LkrbfbqIW1GjLk/delivery_quotes', {
    method: 'POST',
      headers: {
        'Authorization': 'Key'
       },
     body: JSON.stringify({
        pickup_address: '1255 Sansome Street, San Francisco, ca',
        dropoff_address: '400 folsom street, san francisco, ca',
 }).then(results => {
    console.log(results)
    return results.json();
  })
})
  // .then(data => {
    // let delivery = data.results.map(dat) => {
    //   return(
    //     <div key={dat.results}>
        })
    })
  // })
  }
// })
// }
