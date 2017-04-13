import React, { Component } from 'react';
import { Subheader } from 'material-ui';
import { Doughnut } from 'react-chartjs-2';
import WithMongo from '../../../../../data/WithMultiMongo';


const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Timechart',
  },
  scales: {
    xAxes: [{
      type: 'time',
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date',
      },
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'value',
      },
    }],
  },
};


const pieData = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }],
};

class Mongo extends Component {
  render() {
    console.log('rendereing pie yo');
    const { savedContent } = this.props;
    if (!savedContent) {
      return <div><Subheader>No topic configured</Subheader></div>;
    }
    return (
      <WithMongo
        refresh={1000}
        topic={['humidity']}
      >
        {({ data }) => {
          console.log('rendering');
          window.d = data;
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <Doughnut data={pieData} />
            </div>
          )
        }}
      </WithMongo>



    );
  }
}

export default Mongo;
