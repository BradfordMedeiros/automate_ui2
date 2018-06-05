import React, { Component } from 'react';
import Menu from './components/Menu/Menu';

class Programming extends Component {
  state = {
    selectedComponent: 'Actionscripts',
  };
  render() {
    const { labelComponentMap } = this.props;
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