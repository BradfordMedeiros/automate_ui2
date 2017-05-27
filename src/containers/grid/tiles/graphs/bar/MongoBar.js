import React, { Component, PropTypes } from 'react';
import { Subheader } from 'material-ui';
import { Bar } from 'react-chartjs-2';
import WithMongo from '../../../../../data/polling/WithMultiMongo';

const generateData = (data, labels) => ({
  labels,
  datasets: [{
    data,
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
    ],
  }],
});

class Mongo extends Component {
  render() {
    const { savedContent } = this.props;
    if (!savedContent) {
      return <div><Subheader>No topic configured</Subheader></div>;
    }
    return (
      <WithMongo
        refresh={1000}
        topic={[savedContent]}
      >
        {({ data }) => {
          const frequencyMap = data.reduce((acc, curr) => {
            if (acc[curr.message] === undefined) {
              acc[curr.message] = 0;
            }
            acc[curr.message] = acc[curr.message] + 1;
            return acc;
          }, {});

          const dataLabels = Object.keys(frequencyMap);
          const frequencies = dataLabels.map(label => frequencyMap[label]);

          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                marginLeft: '5%',
                background: 'rgba(10,10,10,0.9)',
              }}
            >
              <Bar data={generateData(frequencies, dataLabels)} />
            </div>
          );
        }}
      </WithMongo>
    );
  }
}

Mongo.propTypes = {
  savedContent: PropTypes.any,
};

export default Mongo;
