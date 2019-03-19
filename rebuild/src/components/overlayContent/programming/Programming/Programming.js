import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import './style.css';

class Programming extends Component {
  state = {
    selectedComponent: 'Sequences',
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
                  label: 'States',
                },
                {
                  label: 'Actions',
                },
                {
                  label: 'Events',
                },
                {
                  label: 'Actionscripts',
                },
                {
                  label: 'Sequences',
                },
                {
                  label: 'Env Variables'
                },
              ]}
          />
          {labelComponentMap[this.state.selectedComponent] || null}
        </div>
    )
  }
}



export default Programming;