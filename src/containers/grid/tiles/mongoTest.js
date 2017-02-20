
import React, { Component } from 'react';
import WithMongo from '../../../data/WithMongo';

class Mongo extends Component {
  render() {
    return (
        <WithMongo
          topic="blue"
        >
          {
            ({ data }) =>  <div>{data.map(item => <div>topic: {item.topic}  message: {item.message} </div>)}</div>
          }
        </WithMongo>
    )
  }
}

export default Mongo;