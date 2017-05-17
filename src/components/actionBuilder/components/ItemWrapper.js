import React, { PropTypes } from 'react';

const ItemWrapper = ({ children }) => (
  <div
    style={{
      fontSize: 18,
      minHeight: 100,
      width: '100%',
      padding: 18,
      paddingLeft: 24,
      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      color: 'rgb(210,210,210)',
      overflow: 'auto',
    }}
  >
    {children}
  </div>
);

ItemWrapper.propTypes = {
  children: PropTypes.node,
};

export default ItemWrapper;
