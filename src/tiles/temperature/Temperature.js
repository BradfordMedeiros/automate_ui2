import React, { Component, PropTypes } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import './style.css';

class TemperatureTile extends Component {
  render() {
    const { temperature } = this.props;
    const color = temperature > 50 ? 'rgb(220,40,40)': 'rgb(40,40,220)';

    return (
      <div className="tiles_thermometer">
        <div className="symbol">&#127777;</div>
        <div className="number" style={{ color: color }}>{temperature}</div>
      </div>
    )
  }
}

TemperatureTile.propTypes = {
  temperature: PropTypes.number,
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class TemperatureOverlay extends Component {
  render() {
    return (
      <div className="temp" >
        <TemperatureTile />
        <RadioButtonGroup className="shipSpeed" defaultSelected="not_light">
          <RadioButton
            value="farenheit"
            label="Farenheit"
            style={styles.radioButton}
          />
          <RadioButton
            value="celsius"
            label="Celsius"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>
    );
  }
}


export const tile =  TemperatureTile;
export const overlay = TemperatureOverlay;