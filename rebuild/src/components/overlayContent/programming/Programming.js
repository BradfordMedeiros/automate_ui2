import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import SelectableTypes from './components/SelectableTypes/SelectableTypes';

class Programming extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
        <div style={{ display: 'flex' }}>
          <Menu
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
                /*{
                  label: 'conditions'
                },*/
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
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Header itemName={'some name'} itemType={'some type'} deleteSequence={() => { }} />
            <SelectableTypes
                items={['one','two','three','four']}
                selectedIndex={this.state.selectedIndex}
                onItemSelected={(_, selectedIndex) => {
                  console.log('selected');
                  this.setState({
                    selectedIndex,
                  })
                }}
            />
          </div>
        </div>
    )
  }
}



export default Programming;