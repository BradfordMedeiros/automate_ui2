import React, { Component  } from 'react';
import { IconMenu, IconButton } from 'material-ui';
import { NotificationPower } from 'material-ui/svg-icons';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './style.css';

class MinimalMenu extends Component {
  render() {
    return (
      <div className="min_menu">
        <IconMenu iconButtonElement={<IconButton><MoreVertIcon /> </IconButton>} />
        <IconMenu iconButtonElement={<IconButton><NotificationPower/></IconButton>} />
        <IconMenu iconButtonElement={<IconButton><NotificationPower/></IconButton>} />
        <IconMenu iconButtonElement={<IconButton><NotificationPower/></IconButton>} />

      </div>
    );
  }
}

export default MinimalMenu;