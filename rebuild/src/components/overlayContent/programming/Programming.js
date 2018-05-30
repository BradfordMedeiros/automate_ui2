import React from 'react';
import Menu from './components/Menu/Menu';

const Programming = () => (
    <div style={{ display: 'flex' }}>
      <Menu
          buttonLabels={[{
            label: 'schedules',
          },
          {
            label: 'sequences',
          },
          {
            label: 'statescripts',
          },
          {
            label: 'actionscripts',
          },
          {
            label: 'rules',
          },
            {
              label: 'conditions'
            }
            ]}
        additionalLabels={[
          {
            label: 'states',
          },
          {
            label: 'actions',
          },
          {
            label: 'events',
          }
        ]}
      />
      <div style={{ flexGrow: 1, background: 'blue', display: 'flex'}}>

      </div>
    </div>
);

export default Programming;