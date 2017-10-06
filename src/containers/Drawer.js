import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import Drawer from '../components/drawer/Drawer';
import { setDrawerOpen } from './module';
import { addTile } from './grid/module/module';

const WithCustomTiles = WithData.polling.WithCustomTiles;

class ConnectedDrawer extends Component {
  tileFormData = undefined;
  state = {
    showUploadButton: false,
    tileName: '',
    errorText: undefined,
  };
  render() {
    const { activeGrid, onTileClick, tileNames, ...otherProps } = this.props;

    return (
      <WithCustomTiles
        whileLoading={() => null} // render nothing
      >
        {({ tiles, uploadTile }) => {
          const staticTiles = tileNames;
          const tilesWithCustom = staticTiles.concat({
            label: 'Custom Tiles',
            children: tiles,
          });

          return (
            <Drawer
              {...otherProps}
              errorText={this.state.errorText}
              onUploadRequestClose={() => {
                this.setState({
                  showUploadButton: false,
                })
              }}
              showUploadDialog={this.state.showUploadButton}
              onUploadClick={() => {
                this.setState({
                  showUploadButton: true,
                })
              }}
              onFormData={data => {
                this.tileFormData = data;
              }}
              tileNames={tilesWithCustom}
              onTileClick={(tile,  url) => {
                if (onTileClick){
                  onTileClick(tile, activeGrid, { isCustom: true, url });
                }
              }}
              onTileNameChange={tileName => {
                this.setState({
                  tileName
                })
              }}
              onUploadFileButtonClick={() => {
                if (this.state.tileName.length === 0 || (this.state.tileName.indexOf(' ') >= 0)){
                  this.setState({
                    errorText: 'must include tile name (no spaces)'
                  });
                }else{
                  uploadTile(this.tileFormData, this.state.tileName);
                  this.setState({
                    errorText: undefined,
                    showUploadButton: false,
                  });
                }
              }}
            />
          )
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