import React from 'react';
import './style.css';

const Tile = ({ children }) => (
  <div className="grid_tile">
    {children}
  </div>
);

export default Tile;