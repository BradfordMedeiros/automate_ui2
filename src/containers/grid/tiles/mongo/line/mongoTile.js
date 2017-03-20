import React, { Component } from 'react';
import {  Subheader } from 'material-ui';
import  { Line }  from 'react-chartjs-2'
import WithMongo from '../../../../../data/WithMongo';

class Mongo extends Component {
  render() {
    const {savedContent} = this.props;
    if (!savedContent) {
      return <div><Subheader>No topic configured</Subheader></div>
    }
    return (
      <WithMongo
        topic={savedContent}
        refresh={1000}
      >
        {
          ({data}) => {

            const topic = data[0].topic;
            const dataToRender = data.map(item => [Number(item.message), item.timestamp]);

            const theData = {
              labels: data.map((item, index) => index),
              datasets: [
                {
                  label: topic,
                  data: dataToRender,
                  backgroundColor: "rgba(153,255,51,0.4)"
                }]
            };
            return <Line data={theData}/>
          }
        }
      </WithMongo>
    )
  }
}

export default Mongo;