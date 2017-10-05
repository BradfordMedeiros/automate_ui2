import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import Drawer from '../components/drawer/Drawer';
import { setDrawerOpen } from './module';
import { addTile } from './grid/module/module';

const WithCustomTiles = WithData.polling.WithCustomTiles;

const getContainerDrawer = (tiles, otherProps, onTileClick, activeGrid, onUploadClick, showUploadDialog, onUploadRequestClose) => (
  <Drawer
    {...otherProps}
    onUploadRequestClose={onUploadRequestClose}
    showUploadDialog={showUploadDialog}
    onUploadClick={onUploadClick}
    onFormData={data => {
      window.dd = data;
    }}
    tileNames={tiles}
    onTileClick={(tile,  url) => {
      if (onTileClick){
        onTileClick(tile, activeGrid, { isCustom: true, url });
      }
    }}
  />
);

class ConnectedDrawer extends Component {
  state = {
    showUploadButton: false,
  };
  render() {
    const { activeGrid, onTileClick, tileNames, ...otherProps } = this.props;

    return (
      <WithCustomTiles
        whileLoading={() => getContainerDrawer(tileNames, otherProps, onTileClick, activeGrid)}
      >
        {({ tiles }) => {
          const staticTiles = tileNames;
          const tilesWithCustom = staticTiles.concat({
            label: 'Custom Tiles',
            children: tiles,
          });

          return getContainerDrawer(
            tilesWithCustom,
            otherProps,
            onTileClick,
            activeGrid,
            () => {
              this.setState({
                showUploadButton: true,
              })
            },
            this.state.showUploadButton,
            () => {
              this.setState({
                showUploadButton: false,
              })
            }
          );
        }}
      </WithCustomTiles>
    )
  }
}

const mapStateToProps = state => ({
  open: state.getIn(['reducer', 'drawerOpen']),
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
});

const mapDispatchToProps = dispatch => ({
  onDrawerStateChange: isOpen => dispatch(setDrawerOpen(isOpen)),
  onTileClick: (tileName, activeGrid, { isCustom = false, url = undefined} = { }) => {
    dispatch(addTile(tileName, activeGrid, { isCustom, url }));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedDrawer);