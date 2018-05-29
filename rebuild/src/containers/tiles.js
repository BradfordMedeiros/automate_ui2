import React from 'react';
import Test from '../components/tiles/Test';

const tiles = [
  {
    name: 'Test',
    node: <Test />,
  },
  {
    name: 'another tile',
    node: <div style={{background: 'red'}}>wow !</div>
  },
  {
    name: 'wow!',
    node: <div style={{ background: 'red' }}>wow !</div>
  },
];

export default tiles;