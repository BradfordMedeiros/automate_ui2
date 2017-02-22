import React, { Component } from 'react';
import  { Line }  from 'react-chartjs-2'
import WithMongo from '../../../data/WithMongo';

class Mongo extends Component {
  render() {
    return (
        <WithMongo
          topic="temperature"
          refresh={true}
        >
          {
            ({ data }) =>  {

              const topic = data[0].topic;
              const dataToRender = data.map(item => Number(item.message));

              const theData = {
                labels: data.map((item, index) => index),
                  datasets: [
                    {
                      label: topic,
                      data: dataToRender,
                      backgroundColor: "rgba(153,255,51,0.4)"
                    }]
              };
              return <Line data={theData} />
            }
          }
        </WithMongo>
    )
  }
}

export default Mongo;