import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
import { Map } from 'immutable';
import { AutoSizer } from 'react-virtualized';
import ReactGridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './style.css';


class Grid extends Component {
  render() {
    const { layout, tileNames, tileNameToTile, tileKeyToTileName, onGridItemClick, isEditable, onLayoutChange, style } = this.props;

    window.t = tileKeyToTileName;
    const gridStyle = isEditable ? { animation: 'gridinedit 0.1s linear forwards' } :  { animation: 'gridoutedit 0.1s ease-in forwards' };

    const jsLayout = layout.toJS();
    const tileKeys = jsLayout.map(item => item.i);
    return (
      <div className="grid" style={style}>
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
                      onDoubleClick={() => onGridItemClick(tileKeyToTileName.get(key))}
                    >
                      <Paper zDepth={2} style={{ width: '100%', height: '100%' }}>
                        {tileNameToTile.get(tileKeyToTileName.get(key))}
                      </Paper>
                    </div>
                  )
                })}
            </ReactGridLayout>
          )
        }
      </AutoSizer>
      </div>
    )
  }
}

Grid.PropTypes = {
  onGridItemClick: PropTypes.func,
  tileNames:PropTypes.object.isRequired,
  tileNameToTile: PropTypes.object.isRequired,
  tileKeyToTileName: PropTypes.object.isRequired,
  onLayoutChange: PropTypes.func,
  layout: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Grid;