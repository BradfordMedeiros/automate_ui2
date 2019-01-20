import React from 'react';
import { Actions as ActionsComponent } from '../../../../components/overlayContent/programming/types/Types';

const getActions = (WithActions) => {
  return (
    <WithActions>
      {({ data }) =>  { 
        const actionsProps = data.map(action => ({
          topic: action.name,
          value: action.value,
        }))
        return <ActionsComponent actions={actionsProps} /> 
      }}
    </WithActions>
  )
}

export default getActions;
