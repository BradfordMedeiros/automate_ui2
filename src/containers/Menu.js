import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import MinimalMenu from '../components/menu/minimalMenu';
import EventLog from './EventLog';
import InlineTextfieldDialog from '../components/Dialog/InlineTextfieldDialog';
import { expandMenu } from './module';
import { setContent, setActiveGrid, addGrid, setBackground } from './grid/module';
import SSH from './SSH';
import DeviceInfo from './DeviceInfo';
import ActionBuilder from './system/base/ActionsBuilder';
import StateBuilder from './system/base/StatesBuilder';
import ConditionBuilder from './system/base/ConditionsBuilder';
import SequenceBuilder from './system/engines/SequencesBuilder';
import ScheduleBuilder from './system/engines/ScheduleBuilder';
import RuleBuilder from './system/engines/RuleBuilder';

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

  getButtonLabels = () => {
    const { grids } = this.props;

    const menuItems = grids.map(gridNumber => ({
      label: gridNumber,
      onClick: () => this.onGridClick(gridNumber),
    })).toJS();

    return [
        {
          label: 'Home',
          onClick: () => this.onGridClick('Home'),
        },
        {
          label: 'My Grids',
          children: [
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
              label: 'Set Background',
              onClick: () => {
                this.setState({
                  showSetBackgroundDialog: true,
                });
              },
            },
            ...menuItems,
          ],
        },
        {
          label: 'System',
          children: [
            {
              label: 'States',
              onClick: () => this.openContent(<StateBuilder />),
            },
            {
              label: 'Actions',
              onClick: () => this.openContent(<ActionBuilder />),
            },
            {
              label: 'Conditions',
              onClick: () => this.openContent(<ConditionBuilder />),
            },
          ],
        },
        {
          label: 'Engines',
          children: [
            {
              label: 'Rules',
              onClick: () => this.openContent(<RuleBuilder />),
            },
            {
              label: 'Sequences',
              onClick: () => this.openContent(<SequenceBuilder />),
            },
            {
              label: 'Schedules',
              onClick: () => this.openContent(<ScheduleBuilder />),
            },
          ],
        },
        {
          label: 'Events',
          onClick: () => this.openContent(<EventLog />),
        },
        {
          label: 'Device',
          children: [
            {
              label: 'Device Info',
              onClick: () => this.openContent(<DeviceInfo />),
            },
            {
              label: 'SSH',
              onClick: () => this.openContent(<SSH />),
            },
          ],
        },
      ];
  };
  openContent = (content) => {
    const { onCloseMenu, onSetContent, menuIsExpanded } = this.props;
    if (menuIsExpanded) {
      onCloseMenu();
    } else {
      onSetContent(content);
    }
  }
  render() {
    const {
      isMinimal,
      grids,
      onAddGrid,
      onSetGridBackground,
      onSetContent,
      ...otherProps
    } = this.props;


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
        {isMinimal ?
          <MinimalMenu
            {...otherProps}
            buttonLabels={this.getButtonLabels()}
          />:
          <Menu
            {...otherProps}
            buttonLabels={this.getButtonLabels()}
          />
        }
      </div>
    );
  }
}

MenuContainer.propTypes = {
  isMinimal: PropTypes.bool,
  grids: PropTypes.object.isRequired,
  menuIsExpanded: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  onAddGrid: PropTypes.func.isRequired,
  onSetActiveGrid: PropTypes.func.isRequired,
  onSetGridBackground: PropTypes.func.isRequired,
  onSetContent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  grids: state.getIn(['gridReducer', 'grids']),
});

const mapDispatchToProps = dispatch => ({
  onSetContent: (reactNode) => {
    dispatch(setContent(() => reactNode));
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
