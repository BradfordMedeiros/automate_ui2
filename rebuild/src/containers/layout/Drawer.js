import React from 'react';
import DrawerComponent from '../../components/layout/drawer/Drawer';

const Drawer = ({ open, onRequestClose }) => (
    <DrawerComponent
        open={open}
        tileNames={[
          {
            label: 'graphs',
            children: ['bar', 'line'],
          },
          {
            label: 'controls',
            children: [
              'thing',
              'another',
              'wow',
              {
                name: 'custom',
                url: true,
              },
            ],
          },
          {
            name: 'custom 1',
            url: true,
          },
          {
            name: 'custom 2',
            url: true,
          },
        ]}
        onRequestClose={onRequestClose}
        onDeleteTile={tile  => {
          console.log('delete clicked: ', tile);
        }}
        onTileClick={(tile) => {
          console.log('tile clicked: ', tile);
        }}
        onDownloadTile={tile => {
          console.log('download tile: ', tile);
        }}
    />
);

export default Drawer;