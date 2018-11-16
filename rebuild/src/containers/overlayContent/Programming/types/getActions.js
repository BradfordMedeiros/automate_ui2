import React from 'react';
import ActionsComponent from '../../../../components/overlayContent/programming/components/types/Actions/Actions';

const getActions = (WithActions) => {
  return (
    <WithActions>
      {({ data }) =>  { 
        const actionsProps = data.map(action => ({
          topic: action.name,
          value: 'action value placeholder in getActions'
        }))
        return <ActionsComponent actions={actionsProps} /> 
      }}
    </WithActions>
  )
}

export default getActions;
