import React, { PropTypes, Component } from 'react';
import { Subheader } from 'material-ui';
import { Line } from 'react-chartjs-2';
import WithMongo from '../../../../../data/polling/WithMongo';

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

class Mongo extends Component {
  render() {
    const { savedContent } = this.props;
    if (!savedContent) {
      return <div><Subheader>No topic configured</Subheader></div>;
    }
    return (
      <WithMongo
        topic={savedContent}
        refresh={1000}
      >
        {
          ({ data }) => {
            if (data.length === 0) {
              return <div>No Data for {savedContent}</div>;
            }
            const topic = data[0].topic;
            const dataToRender = data.map(item => ({
              x: new Date(item.timestamp),
              y: Number(item.message),
            }));

            const theData = {
              labels: data.map(item => item.timestamp),
              datasets: [
                {
                  label: topic,
                  data: dataToRender,
                  backgroundColor: 'rgba(153,255,51,0.4)',
                  width: '80%',
                  marginLeft: '10%',
                }],
            };
            return (
              <div style={{ height: '100%', overflow: 'hidden', background: 'rgba(10,10,10,0.9)' }}>
                <Line options={options} data={theData} />
              </div>
            );
          }
        }
      </WithMongo>
    );
  }
}

Mongo.propTypes = {
  savedContent: PropTypes.any,
};

export default Mongo;
