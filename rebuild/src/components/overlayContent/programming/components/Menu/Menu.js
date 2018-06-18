import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './style.css';

class Menu extends Component {
  render() {
    const { buttonLabels, additionalLabels, selectedLabel, onSelectLabel } = this.props;

    return (
      <div className="programming_menu" >
        <List>
          {additionalLabels.map((item) => {
            const className = ('liname' + ((selectedLabel === item.label)? ' liname-selected' : ''));
            return (
                <ListItem
                    className={className}
                    onClick={() => {
                      onSelectLabel(item.label);
                    }}
                >
                  {item.label}
                </ListItem>
            )
          })}
          <hr className="programming_menu_divider" />
          {buttonLabels.map((item) => {
            const className = ('liname' + ((selectedLabel === item.label)? ' liname-selected' : ''));
            return (
                <ListItem
                    className={className}
                    onClick={() => {
                      onSelectLabel(item.label);
                    }}
                >
                  {item.label}
                </ListItem>
            )
          })}
        </List>
      </div>
    );
  }
}

Menu.propTypes = {
  buttonLabels: PropTypes.array,
  selectedLabel: PropTypes.string,
  onSelectLabel: PropTypes.func,

};

export default Menu;
