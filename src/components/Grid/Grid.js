import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
import { AutoSizer } from 'react-virtualized';
import ReactGridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './style.css';

class Grid extends Component {
  render() {
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    const { onGridItemClick, isEditable } = this.props;

    const gridStyle = isEditable ? { animation: 'gridinedit 0.1s linear forwards' } :  { animation: 'gridoutedit 0.1s ease-in forwards' };
    return (
      <div className="grid" style={gridStyle}>
      <AutoSizer>
        {
          ({ width, height }) => (
              <ReactGridLayout
              layout={layout}
              cols={12}
              rowHeight={30}
              width={width}
              verticalCompact
              isDraggable={isEditable}
              isResizable={isEditable}
            >
              <div key={'a'}>
                <Paper zDepth={2} onDoubleClick={() => onGridItemClick()} style={{  width: '100%', height: '100%', backgroundColor: 'rgb(140,140,140)'}}>
                  <div width="100%" height="100%" className="divthing">
                  </div>
                </Paper>
              </div>
              <div key={'b'}>
                <Paper zDepth={2}  style={{  width: '100%', height: '100%', backgroundColor: 'white'  }}>
                  <div style={{ border: '1px solid black', color: 'blue', width: '100%', height: '100%' }} onClick={() => console.log('clicked')}>
                    CLICK ME
                  </div>
                </Paper>
              </div>
              <div key={'c'}>
                <Paper  zDepth={2} style={{  width: '100%', height: '100%', backgroundColor: 'yellow'  }}>hello</Paper>
              </div>
            </ReactGridLayout>
          )
        }
      </AutoSizer>
      </div>
    )
  }
}

Grid.PropTypes = {
  onGridItemClick: PropTypes.func.isRequired,
};

export default Grid;