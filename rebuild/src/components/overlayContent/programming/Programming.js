import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import './style.css';

class Programming extends Component {
  state = {
    selectedComponent: 'States',
  };
  render() {
    const { labelComponentMap } = this.props;
    return (
        <div className="programming_comp_outer">
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