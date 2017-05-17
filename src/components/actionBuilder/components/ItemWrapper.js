import React, { PropTypes } from 'react';

const ItemWrapper = ({ children }) => (
  <div
    style={{
      fontSize: 18,
      padding: 18,
      paddingLeft: 24,
      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      color: 'rgb(210,210,210)',
    }}
  >
    {children}
  </div>
);

ItemWrapper.propTypes = {
  children: PropTypes.node,
};

export default ItemWrapper;
