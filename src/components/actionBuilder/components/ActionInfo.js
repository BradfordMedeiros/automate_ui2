import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../axiomBuilder/AxiomHeader';

class ActionInfo extends Component {
  render() {
    const { actionName } = this.props;
    return (
      <AxiomHeader
        deleteSequence={() => { }}
        axiomName="Action"
        axiomNameValue={actionName}
      />
    );
  }
}

ActionInfo.propTypes = {
  actionName: PropTypes.string,
};

export default ActionInfo;