import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import SelectableTypes from './components/SelectableTypes/SelectableTypes';
import Schedules from './components/types/Schedules/Schedules';
import Rules from './components/types/Rules/Rules';
import getActionScript from './components/types/ActionScript/getActionScript';
import getStateScript from './components/types/StateScript/getStateScript';

const ActionScript = getActionScript(Header, SelectableTypes);
const StateScript = getStateScript(Header, SelectableTypes);


const labelComponentMap = {
  Actionscripts: <ActionScript />,
  Statescripts: <StateScript />,

};


class Programming extends Component {
  state = {
    selectedComponent: 'Actionscripts',
  };
  render() {
    return (
        <div style={{ display: 'flex' }}>
          <Menu
              selectedLabel={this.state.selectedComponent}
              onSelectLabel={selectedComponent => {
                this.setState({
                  selectedComponent,
                })
              }}
              buttonLabels={[
                {
                  label: 'Statescripts',
                },
                {
                  label: 'Actionscripts',
                },
                {
                  label: 'Schedules',
                },
                {
                  label: 'Sequences',
                },
                {
                  label: 'Rules',
                },
              ]}
              additionalLabels={[
                {
                  label: 'States',
                },
                {
                  label: 'Actions',
                },
                {
                  label: 'Events',
                },
                {
                  label: 'Env Variables'
                }
              ]}
          />
          {labelComponentMap[this.state.selectedComponent] || null}
        </div>
    )
  }
}



export default Programming;