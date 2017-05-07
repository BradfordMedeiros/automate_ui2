import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, TextField, RaisedButton } from 'material-ui';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import InlineTextfieldDialog from '../components/Dialog/InlineTextfieldDialog';
import { expandMenu } from './module';
import { setContent, setActiveGrid, addGrid, setBackground } from './grid/module';
import SSH from '../ssh/SSH';
import DeviceInfo from '../components/device/DeviceInfo';

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
  closeDialog = () => this.setState({ showAddDialog: false });

  onGridClick = (gridName) => {
    const { setActiveGrid, menuIsExpanded, closeMenu } = this.props;
    if (menuIsExpanded) {
      closeMenu();
    }
    setActiveGrid(gridName);
  };
  render() {
    const {
      grids,
      setSSHContent,
      setEventLog,
      closeMenu,
      menuIsExpanded,
      addGrid,
      setActiveGrid,
      setGridBackground,
      setDeviceInfo,
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
          closeDialog={this.closeDialog}
          onChange={(_, gridName) => this.setState({ gridName })}
          hintText={'grid name'}
          text={'Set the name of the grid'}
          onOkClick={() => {
            addGrid(this.state.gridName);
            this.closeDialog();
          }}
        />
        <InlineTextfieldDialog
          open={this.state.showSetBackgroundDialog}
          closeDialog={() => { this.setState({ showSetBackgroundDialog: false }); }}
          onChange={(_, backgroundUrl) => { this.setState({ backgroundUrl }); }}
          hintText={'background url'}
          text={'Set the url of a background image'}
          onOkClick={() => {
            setGridBackground(this.state.backgroundUrl);
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
                  closeMenu();
                }else{
                  setSSHContent();
                }
              },
            },
            {
              label: 'Events',
              onClick: () => {
                if (menuIsExpanded) {
                  closeMenu();
                } else {
                  setEventLog();
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
                  closeMenu();
                } else {
                  setDeviceInfo();
                }
              },
            }
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  grids: state.getIn(['gridReducer', 'grids']),
});

const mapDispatchToProps = (dispatch, props) => ({
  setSSHContent: () => {
    dispatch(setContent(() => <SSH />));
    dispatch(expandMenu(true))
  },
  setDeviceInfo: () => {
    dispatch(setContent(() => <DeviceInfo ipAddress="127.0.0.1" macAddress="00-14-22-01-23-45" />));
    dispatch(expandMenu(true));
  },
  setEventLog: () => {
    dispatch(setContent(() => <EventLog />));
    dispatch(expandMenu(true));
  },
  closeMenu: () => {
    dispatch(expandMenu(false));
  },
  showSequence: () => {
    dispatch(setContent(() => <SequenceBuilder sequence={['seq0', 'seq1', 'seq2', 'seq3']} />));
    dispatch(expandMenu(true));
  },
  addGrid: gridName => dispatch(addGrid(gridName)),
  setActiveGrid: gridNumber => dispatch(setActiveGrid(gridNumber)),
  setGridBackground: backgroundUrl => dispatch(setBackground(backgroundUrl)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
