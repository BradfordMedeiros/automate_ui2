import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui';
import { List as IList } from 'immutable';
import './style.css';


const liStyle = {
  border: '1px solid rgb(40,40,40)',
};

class Menu extends Component {
  render() {
    const { buttonLabels, style } = this.props;
    return (
      <div style={style} className="menu" >
        <List>
          {buttonLabels.map(
            (label,index) =>
              <ListItem key={index} style={liStyle}>
                <div className="liname">{label}</div>
              </ListItem>
          )}
        </List>
      </div>
    );
  }
}

Menu.propTypes = {
  buttonLabels: PropTypes.object,
  style: PropTypes.object,
};

Menu.defaultProps = {
  buttonLabels: IList([]),
};
export default Menu;