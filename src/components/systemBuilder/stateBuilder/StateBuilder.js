import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../common/AxiomHeader';
import AxiomBuilder from '../../axiomBuilder/AxiomBuilder';
import StateInfo from './components/common/StateInfo';

class StateBuilder extends Component {
  render() {
    const { stateType } = this.props;
    return (
      <AxiomBuilder
        title="States"
        axioms={[{ name: 'hello' }].map(action => action.name)}
        selectedIndex={0}
        onAxiomChange={() => { }}
        onAxiomSelected={() => { }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <StateInfo
            actionName={'test name'}
            deleteAction={() => {

            }}
          />
          <div style={{ width: '100%', height: '100%' }}>
            <AxiomHeader actionType={'javascript'} />
          </div>
        </div>
      </AxiomBuilder>
    )
  }
}

StateBuilder.propTypes = {
  stateType: PropTypes.string,
};


export default StateBuilder;
