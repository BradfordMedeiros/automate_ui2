import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Tile from './components/Tile/Tile';
import AddTilesText from './components/AddTilesText/AddTilesText';
import '../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../node_modules/react-resizable/css/styles.css';
import './style.css';

const GridLayout = WidthProvider(Responsive);

class Grid extends Component {
  generateGridItemsFromTiles = (tiles, onTileDoubleClick) => {
    const gridItems = tiles.map(tile => {
      return <div onDoubleClick={() => onTileDoubleClick(tile)} key={tile.name}><Tile>{tile.node}</Tile></div>;
    });
    return gridItems;
  };
  render() {
    const { tiles, onLayoutChange, layout, isEditable, onTileDoubleClick } = this.props;

    return (
        <div className="main_grid_wrapper">
          {tiles.length === 0 && <AddTilesText message={"add tiles"} />}
          <GridLayout
              layouts={layout}
              onLayoutChange={onLayoutChange}
              isResizable={isEditable === true}
              isDraggable={isEditable === true}
              containerPadding={[0,0]}
              margin={[0,0]}
              compactType={null}
              preventCollision
              className="layout"
          >
            {this.generateGridItemsFromTiles(tiles, onTileDoubleClick)}
          </GridLayout>
        </div>

    )
  }
}

Grid.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.node),
  layout: PropTypes.arrayOf(PropTypes.object),
  onLayoutChange: PropTypes.func,
  isEditable: PropTypes.bool,
  onTileDoubleClick: PropTypes.func,
};

export default Grid;