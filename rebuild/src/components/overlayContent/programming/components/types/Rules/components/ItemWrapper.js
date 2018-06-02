import React from 'react';
import PropTypes from 'prop-types';

const ItemWrapper = ({ children, style }) => (
    <div
        style={{
          position: 'relative',
          fontSize: 18,
          width: '100%',
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
