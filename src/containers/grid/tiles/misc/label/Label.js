
import React from 'react';

const style = {
  fontSize: 28,
  color: 'rgba(240,240,240,0.8)',
  background: 'rgba(0,0,0,0.8)',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Label = ({ savedContent }) => (
  <div style={style}>{savedContent ? savedContent : 'label unset'}</div>
);

export const tile = Label;


