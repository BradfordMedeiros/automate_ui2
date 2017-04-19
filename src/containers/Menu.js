import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, TextField, RaisedButton } from 'material-ui';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import { expandMenu, setGridIsOpen } from './module';
import { setContent, setActiveGrid, addGrid } from './grid/module';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
      gridName: null,
    };
  }
  closeDialog = () => this.setState({ showAddDialog: false });

  onGridClick = (gridName) => {
    const { setActiveGrid, menuIsExpanded, closeMenu, closeSSHContent, addGridExpanded } = this.props;
    if (menuIsExpanded) {
      closeMenu();
    }
    if (addGridExpanded) {
      closeSSHContent();
    }
    setActiveGrid(gridName);
  };
  render() {
    const {
      grids,
      setSSHContent,
      closeSSHContent,
      setEventLog,
      closeMenu,
      menuIsExpanded,
      addGridExpanded,
      addGrid,
      setActiveGrid,
      ...otherProps
    } = this.props;

    const menuItems = grids.map(gridNumber => ({
      label: gridNumber,
      onClick: () => this.onGridClick(gridNumber),
    })).toJS();

    return (
      <div>
        <Dialog
          bodyStyle={{ backgroundColor: 'rgb(40, 40, 40)', border: '1px ridge rgba(255,255,255,0.1)' }}
          open={this.state.showAddDialog}
          onRequestClose={() => {
            this.setState({ showAddDialog: false });
          }}
        >
          <div style={{ display: 'inline', color: 'rgba(255,255,255,0.8)' }}>Set the name of the grid</div>
          <TextField
            style={{ paddingLeft: 20 }}
            hintText="Grid name"
            onChange={(_, value) => {
              this.setState({ gridName: value });
            }}
          />
          <RaisedButton onClick={this.closeDialog} style={{ marginLeft: 50 }} label="Cancel" />
          <RaisedButton
            onClick={() => {
              addGrid(this.state.gridName);
              this.closeDialog();
            }}
            style={{ marginLeft: 10 }}
            label="OK"
          />

        </Dialog>
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
                if (addGridExpanded || menuIsExpanded) {
                  closeMenu();
                  closeSSHContent();
                } else {
                  setSSHContent();
                }
              },
            },
            {
              label: 'Events',
              onClick: () => {
                if (menuIsExpanded || addGridExpanded) {
                  closeMenu();
                  closeSSHContent();
                } else {
                  setEventLog();
                }
              },
            },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  addGridExpanded: state.getIn(['reducer', 'gridIsOpen']),
  grids: state.getIn(['gridReducer', 'grids']),
});

const mapDispatchToProps = (dispatch, props) => ({
  setSSHContent: () => {
    dispatch(setGridIsOpen(true));
  },
  closeSSHContent: () => {
    dispatch(setGridIsOpen(false));
  },
  setEventLog: () => {
    dispatch(setContent(() => <EventLog />));
    dispatch(expandMenu(true));
  },
  closeMenu: () => {
    dispatch(expandMenu(false));
  },
  addGrid: gridName => dispatch(addGrid(gridName)),
  setActiveGrid: gridNumber => dispatch(setActiveGrid(gridNumber)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
