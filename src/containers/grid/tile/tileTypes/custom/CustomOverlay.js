import React from 'react';

const CustomOverlay = ({ tileName, isEditing }) => (
  <iframe
    alt="Cannot load custom content"
    src={`http://localhost:9000/${tileName.overlay}`}
    allowFullScreen
    style={{ border: '0 none', height: '100%', width: '100%', pointerEvents: isEditing ? 'none' : undefined }}
  />
);

export const overlay = CustomOverlay;