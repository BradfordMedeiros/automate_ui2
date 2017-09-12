import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
import { WidthProvider, Responsive } from 'react-grid-layout';
import './react-grid-layout.css';
import './react-resizable.css';
//import '../../../node_modules/react-grid-layout/css/styles.css';
//import '../../../node_modules/react-resizable/css/styles.css';
import './style.css';

const ReactGridLayout = WidthProvider(Responsive);

class Grid extends Component {
  render() {
    const {
      layout,
      tileNameToTile,
      tileKeyToTileName,
      onGridItemClick,
      isEditable,
      onLayoutChange,
      style,
    } = this.props;

    const jsLayout = layout ? layout.toJS() : [];
    const tileKeys = jsLayout.map(item => item.i);

    return (
      <div>
        <div className="grid" style={style}>
          {(tileKeys.length === 0) && (
            <div style={{width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)'}} />
            )}
          {(tileKeys.length === 0) && (
            <div
              style={{
                position: 'absolute',
                left: '30%',
                right: '30%',
                display: 'flex',
                justifyContent: 'center',
                top: '30%',
                color: 'rgb(210,210,210)',
                borderTop: '1px solid grey',
                borderBottom: '1px solid grey',
                textShadow: '0px 1px 1px black',
                fontFamily: 'monospace',
                fontSize: 48,
                padding: 14,
              }}
            >
              Add tiles to the grid
            </div>
          )}
          <ReactGridLayout
            layouts={{ xxs: jsLayout, xs: jsLayout, sm: jsLayout, md: jsLayout, lg: jsLayout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 24, md: 24, sm: 4, xs: 4, xxs: 4 }}
            rowHeight={30}
            verticalCompact
            margin={[0,0]}
            isDraggable={isEditable}
            isResizable={isEditable}
            useCSSTransforms={true}
            onLayoutChange={(newLayout) => {
              if (isEditable && onLayoutChange) {
                onLayoutChange(newLayout);
              }
            }}
          >
            {tileKeys.map(key => (
              <div
                key={key}
                style={{ width: '100%', height: '100%' }}
                onDoubleClick={() => onGridItemClick(tileKeyToTileName.get(key), key)}
              >
                <Paper zDepth={1} style={{ width: '100%', height: '100%', background: 'none' }}>
                  {tileNameToTile.get(tileKeyToTileName.get(key), key, isEditable)}
                </Paper>
              </div>
              ))}
          </ReactGridLayout>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  onGridItemClick: PropTypes.func,
  tileNameToTile: PropTypes.object.isRequired,
  tileKeyToTileName: PropTypes.object.isRequired,
  onLayoutChange: PropTypes.func,
  isEditable: PropTypes.bool,
  layout: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Grid;
