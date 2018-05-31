import React, { Component } from 'react';
require('dotenv').config()

const API = 'https://api.postmates.com/v1/customers/cus_LkrbfbqIW1GjLk/delivery_quotes';


class Ddelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API, {
      method: 'POST',
        headers: {
          'Authorization': process.env.SECRET_KEY,
        },
      body: JSON.stringify({
        pickup_address: '1225 Sansome Street, San Francisco, CA',
        dropoff_address: '400 Folsom Street, San Francisco,CA',
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }


  render() {
    const { hits } = this.state;
    console.log(hits)
    return (
      <div>
        {hits.map(hit =>
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        )}
      </div>
    );
  }
}

export default Ddelivery;