import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../axiomBuilder/AxiomHeader';

class ActionInfo extends Component {
  render() {
    const { axiomName, deleteAxiom } = this.props;
    return (
      <AxiomHeader
        axiomName="Action"
        axiomNameValue={axiomName}
        deleteSequence={deleteAxiom}
      />
    );
  }
}

ActionInfo.propTypes = {
  axiomName: PropTypes.string,
  deleteAxiom: PropTypes.func.isRequired,
};

export default ActionInfo;
