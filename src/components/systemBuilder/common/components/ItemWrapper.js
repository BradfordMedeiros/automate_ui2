import React, { PropTypes } from 'react';

const ItemWrapper = ({ children, style }) => (
  <div
    style={{
      fontSize: 18,
      minHeight: 100,
      width: '100%',
      padding: 18,
      paddingLeft: 32,
      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      color: 'rgb(210,210,210)',
      overflow: 'auto',
      ...style,
    }}
  >
    {children}
  </div>
);

ItemWrapper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default ItemWrapper;
