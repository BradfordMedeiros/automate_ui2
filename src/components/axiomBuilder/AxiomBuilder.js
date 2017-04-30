import React, { Component, PropTypes } from 'react';
import AxiomSelection from './components/AxiomSelection';
//import SequenceInfo from './components/SequenceInfo';


class SequenceBuilder extends Component {
  render() {
    const {
      axioms,
      title,
      selectedIndex,
      onAxiomSelected,
      onAxiomChange,
      children,
    } = this.props;

    return (
      <div style={{ height: '100%', background: '#282828' }}>
        <div
          style={{
            width: '100%',
            background: 'rgb(40,40,40)',
            height: 60,
            fontSize: '140%',
            paddingLeft: 30,
            paddingTop: 20,
            color: 'rgb(160,160,160)',
            borderBottom: '1px solid black',
            display: 'inline-block',
          }}
        >
          <div style={{ display: 'inline', cursor: 'pointer', paddingRight: 120 }}>{title}</div>
        </div>
        <div style={{ display: 'flex' }}>
          <AxiomSelection
            axioms={axioms}
            selectedIndex={selectedIndex}
            onAxiomSelected={onAxiomSelected}
            onAxiomChange={onAxiomChange}
            style={{ width: 250 }}
          />
          <div style={{ width: 0, height: '100%', border: '1px solid black' }} />
          {children}
        </div>
      </div>
    );
  }
}


SequenceBuilder.propTypes = {
  axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onAxiomSelected: PropTypes.func,
  onAxiomChange: PropTypes.func,
  children: PropTypes.node,
};

export default SequenceBuilder;
