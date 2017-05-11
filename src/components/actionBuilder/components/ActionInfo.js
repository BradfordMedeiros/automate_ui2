import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../axiomBuilder/AxiomHeader';

class ActionInfo extends Component {
  render() {
    const { actionName, deleteAction } = this.props;
    return (
      <AxiomHeader
        deleteSequence={deleteAction}
        axiomName="Action"
        axiomNameValue={actionName}
      />
    );
  }
}

ActionInfo.propTypes = {
  actionName: PropTypes.string,
  deleteAction: PropTypes.func.isRequired,
};

export default ActionInfo;
