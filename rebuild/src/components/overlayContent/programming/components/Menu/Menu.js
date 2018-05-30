import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './style.css';

class Menu extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    const { buttonLabels, additionalLabels} = this.props;
    return (
      <div className="programming_menu" >
        <List>
          {additionalLabels.map((item, index) => {
            const className = ('liname' + ((this.state.selectedIndex - buttonLabels.length === index )? ' liname-selected' : ''));
            return (
                <ListItem
                    className={className}
                    onClick={() => {
                      this.setState({
                        selectedIndex: index + buttonLabels.length,
                      })
                    }}
                >
                  {item.label}
                </ListItem>
            )
          })}
          <hr className="programming_menu_divider" />
          {buttonLabels.map((item, index) => {
            const className = ('liname' + ((this.state.selectedIndex === index )? ' liname-selected' : ''));
            return (
                <ListItem
                    className={className}
                    onClick={() => {
                      this.setState({
                        selectedIndex: index,
                      })
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
};

export default Menu;
