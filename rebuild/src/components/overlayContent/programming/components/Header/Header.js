import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ deleteItem, itemType, itemName }) => (
  <div id="axiom_header">
    <div id="axiom_header_label">{itemType} Name: {itemName} </div>
    <div id="axiom_header_delete" onClick={deleteItem}>Delete</div>
  </div>
);

Header.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default Header;
