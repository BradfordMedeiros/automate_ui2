import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, TextField, RaisedButton } from 'material-ui';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import InlineDialog from '../components/InlineDialog';
import { expandMenu, setGridIsOpen } from './module';
import { setContent, setActiveGrid, addGrid, setBackground } from './grid/module';


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
      setGridBackground,
      ...otherProps
    } = this.props;

    const menuItems = grids.map(gridNumber => ({
      label: gridNumber,
      onClick: () => this.onGridClick(gridNumber),
    })).toJS();

    return (
      <div>
        <InlineDialog
          open={this.state.showAddDialog}
          closeDialog={this.closeDialog}
          onChange={(_, gridName) => this.setState({ gridName })}
          onOkClick={() => {
            addGrid(this.state.gridName);
            this.closeDialog();
          }}
        />
        <InlineDialog
          open={this.state.showSetBackgroundDialog}
          closeDialog={() => { this.setState({ showSetBackgroundDialog: false }); }}
          onChange={(_, backgroundUrl) => { this.setState({ backgroundUrl }) }}
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
            {
              label: 'Set Background',
              onClick: () => {
                this.setState({
                  showSetBackgroundDialog: true,
                })
              }
            }
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
  setGridBackground: backgroundUrl => dispatch(setBackground(backgroundUrl)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
