
import React, { Component } from 'react';
import WithMongo from '../../../data/WithMongo';

class Mongo extends Component {
  render() {
    return (
        <WithMongo
          Child={<div>hello</div>}
        />
    )
  }
}

export default Mongo;