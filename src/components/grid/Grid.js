import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
import { WidthProvider, Responsive } from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
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
          <ReactGridLayout
            layouts={{ xxs: jsLayout, xs: jsLayout, sm: jsLayout, md: jsLayout, lg: jsLayout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 24, md: 24, sm: 1, xs: 1, xxs: 1 }}
            rowHeight={30}
            verticalCompact
            isDraggable={isEditable}
            isResizable={isEditable}
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
