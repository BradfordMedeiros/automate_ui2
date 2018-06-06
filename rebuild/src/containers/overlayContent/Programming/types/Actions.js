import React from 'react';
import ActionsComponent from '../../../../components/overlayContent/programming/components/types/Actions/Actions';

const Actions = () => (
    <ActionsComponent
      actions={[
        { topic: 'action/open_door', value: 'slow' },
        { topic: 'action/close_door', value: 'fast' },
        { topic: 'action/turn_on_tv', value: 'true' },
        { topic: 'action/turn_off_tv', value: 'true' },
      ]}
    />
)
export default Actions;
