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


const generateData = (data, labels) => ({
  labels,
  datasets: [{
    data,
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
});

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
        topic={['thing']}
      >
        {({ data }) => {
          const items = {};
          const frequency_map = data.reduce((acc, curr) => {
            if (acc[curr.message] === undefined) {
              acc[curr.message] = 0;
            }
            acc[curr.message] = acc[curr.message] + 1;
            return acc;
          }, {});

          const dataLabels = Object.keys(frequency_map);
          const frequencies = dataLabels.map(label => frequency_map[label]);

          return <Doughnut data={generateData(frequencies, dataLabels)} />;
        }}
      </WithMongo>
    );
  }
}

export default Mongo;
