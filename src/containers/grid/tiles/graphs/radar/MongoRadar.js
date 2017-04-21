import React, { Component } from 'react';
import { Subheader } from 'material-ui';
import { Radar } from 'react-chartjs-2';
import WithMongo from '../../../../../data/WithMultiMongo';


const options = {
  title: {
    display: true,
    text: 'Radar Chart',
  },
};

const generateData = (data, labels) => ({
  labels,
  datasets: [{
    data,
    backgroundColor: 'rgba(150,250,150,0.7)',
    borderColor: 'rgba(179,181,198,1)',
    pointBackgroundColor: 'rgba(179,181,198,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(179,181,198,1)',
    label: 'Topic Data',
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
          const frequency_map = data.reduce((acc, curr) => {
            if (acc[curr.message] === undefined) {
              acc[curr.message] = 0;
            }
            acc[curr.message] = acc[curr.message] + 1;
            return acc;
          }, {});

          const dataLabels = Object.keys(frequency_map);
          const frequencies = dataLabels.map(label => frequency_map[label]);

          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                background: 'rgba(10,10,10,0.9)',
              }}
            >
              <Radar options={options} data={generateData(frequencies, dataLabels)} />
            </div>
          );
        }}
      </WithMongo>
    );
  }
}

export default Mongo;
