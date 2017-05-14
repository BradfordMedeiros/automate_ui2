import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import InlineTextfieldDialog from '../components/Dialog/InlineTextfieldDialog';
import { expandMenu } from './module';
import { setContent, setActiveGrid, addGrid, setBackground } from './grid/module';
import SSH from '../ssh/SSH';
import DeviceInfo from './DeviceInfo';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
      gridName: null,
      showSetBackgroundDialog: false,
      backgroundUrl: false,
    };
  }
  onCloseDialog = () => this.setState({ showAddDialog: false });

  onGridClick = (gridName) => {
    const { onSetActiveGrid, menuIsExpanded, onCloseMenu } = this.props;
    if (menuIsExpanded) {
      onCloseMenu();
    }
    onSetActiveGrid(gridName);
  };
  render() {
    const {
      grids,
      onSetSSHContent,
      onSetEventLog,
      onCloseMenu,
      menuIsExpanded,
      onAddGrid,
      onSetActiveGrid,
      onSetGridBackground,
      onSetDeviceInfo,
      ...otherProps
    } = this.props;

    const menuItems = grids.map(gridNumber => ({
      label: gridNumber,
      onClick: () => this.onGridClick(gridNumber),
    })).toJS();

    return (
      <div>
        <InlineTextfieldDialog
          open={this.state.showAddDialog}
          closeDialog={this.onCloseDialog}
          onChange={(_, gridName) => this.setState({ gridName })}
          hintText={'grid name'}
          text={'Set the name of the grid'}
          onOkClick={() => {
            onAddGrid(this.state.gridName);
            this.onCloseDialog();
          }}
        />
        <InlineTextfieldDialog
          open={this.state.showSetBackgroundDialog}
          closeDialog={() => { this.setState({ showSetBackgroundDialog: false }); }}
          onChange={(_, backgroundUrl) => { this.setState({ backgroundUrl }); }}
          hintText={'background url'}
          text={'Set the url of a background image'}
          onOkClick={() => {
            onSetGridBackground(this.state.backgroundUrl);
            this.setState({ showSetBackgroundDialog: false, backgroundUrl: undefined });
          }}
        />
        <Menu
          {...otherProps}
          buttonLabels={
          [
            {
              label: 'Home',
              onClick: () => this.onGridClick('Home'),
            },
            ...menuItems,
            {
              label: 'Add Grid +',
              onClick: () => {
                this.setState({
                  showAddDialog: true,
                  gridName: null,
                });
              },
            },
            {
              label: 'SSH',
              onClick: () => {
                if (menuIsExpanded) {
                  onCloseMenu();
                } else {
                  onSetSSHContent();
                }
              },
            },
            {
              label: 'Events',
              onClick: () => {
                if (menuIsExpanded) {
                  onCloseMenu();
                } else {
                  onSetEventLog();
                }
              },
            },
            {
              label: 'Set Background',
              onClick: () => {
                this.setState({
                  showSetBackgroundDialog: true,
                });
              },
            },
            {
              label: 'Device Info',
              onClick: () => {
                if (menuIsExpanded) {
                  onCloseMenu();
                } else {
                  onSetDeviceInfo();
                }
              },
            },
          ]}
        />
      </div>
    );
  }
}

MenuContainer.propTypes = {
  grids: PropTypes.object.isRequired,
  menuIsExpanded: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  onAddGrid: PropTypes.func.isRequired,
  onSetEventLog: PropTypes.func.isRequired,
  onSetActiveGrid: PropTypes.func.isRequired,
  onSetSSHContent: PropTypes.func.isRequired,
  onSetDeviceInfo: PropTypes.func.isRequired,
  onSetGridBackground: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  grids: state.getIn(['gridReducer', 'grids']),
});

const mapDispatchToProps = dispatch => ({
  onSetSSHContent: () => {
    dispatch(setContent(() => <SSH />));
    dispatch(expandMenu(true));
  },
  onSetDeviceInfo: () => {
    dispatch(setContent(() => <DeviceInfo ipAddress="127.0.0.1" macAddress="00-14-22-01-23-45" />));
    dispatch(expandMenu(true));
  },
  onSetEventLog: () => {
    dispatch(setContent(() => <EventLog />));
    dispatch(expandMenu(true));
  },
  onCloseMenu: () => {
    dispatch(expandMenu(false));
  },
  onAddGrid: gridName => dispatch(addGrid(gridName)),
  onSetActiveGrid: gridNumber => dispatch(setActiveGrid(gridNumber)),
  onSetGridBackground: backgroundUrl => dispatch(setBackground(backgroundUrl)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer); //eslint-disable-line
