import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
import { Map } from 'immutable';
import { AutoSizer } from 'react-virtualized';
import ReactGridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './style.css';

import SSH from '../../ssh/ssh';

class Grid extends Component {
  render() {
    const { layout, tileNameToTile, tileKeyToTileName, onGridItemClick, isEditable, onLayoutChange, style, isOpen } = this.props;

    let gridStyle = isOpen ? { animation: 'grid_slide 0.2s linear forwards' } :  { animation: 'grid_slide_out 0.1s linear forwards' };

    const jsLayout = layout.toJS();
    const tileKeys = jsLayout.map(item => item.i);

    return (
      <div>
        <div className="grid_background" style={style}><SSH /></div>

        <div className="grid" style={{...style, ...gridStyle }}>
      <AutoSizer>
        {
          ({ width, height }) => (
              <ReactGridLayout
              layout={jsLayout}
              cols={24}
              rowHeight={30}
              width={width}
              verticalCompact
              isDraggable={isEditable}
              isResizable={isEditable}
              onLayoutChange={layout => {
                if (onLayoutChange){
                  onLayoutChange(layout);
                }
              }}
            >
                {tileKeys.map((key,index) => {
                  return (
                    <div
                      key={key}
                      style={{ width: '100%', height: '100%' }}
                      onDoubleClick={() => onGridItemClick(tileKeyToTileName.get(key), key)}
                    >
                      <Paper zDepth={2} style={{ width: '100%', height: '100%' }}>
                        {tileNameToTile.get(tileKeyToTileName.get(key), key)}
                      </Paper>
                    </div>
                  )
                })}
            </ReactGridLayout>
          )
        }
      </AutoSizer>
      </div>
      </div>
    )
  }
}

Grid.PropTypes = {
  onGridItemClick: PropTypes.func,
  tileNameToTile: PropTypes.object.isRequired,
  tileKeyToTileName: PropTypes.object.isRequired,
  onLayoutChange: PropTypes.func,
  layout: PropTypes.object.isRequired,
  style: PropTypes.object,
  opened: PropTypes.bool,
};

export default Grid;