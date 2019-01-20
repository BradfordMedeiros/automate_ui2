import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class SelectableTypes extends Component {
  render() {
    const {items, onItemSelected, onAddClicked, selectedIndex} = this.props;
    return (
        <List className="selectable_types_outer">
          {items.map((item, index) =>
              (<MenuItem
                  className="selectable_type"
                  selected={index === selectedIndex}
                  key={index}
                  onClick={() => {
                    if (onItemSelected) {
                      onItemSelected(item, index);
                    }
                  }}
              >
                {item}
              </MenuItem>),
          )}
          <MenuItem
              button
              className="selectable_type"
              onClick={() => { onAddClicked() }}
          >
            Add New +
          </MenuItem>
        </List>
    );
  }
}

SelectableTypes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemSelected: PropTypes.func,
  onAddClicked: PropTypes.func,
  selectedIndex: PropTypes.number,
};

export default SelectableTypes;
