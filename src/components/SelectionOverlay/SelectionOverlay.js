import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import './style.css';

const style = {
  expanded: {
    animation: 'fade_in 0.2s  ease forwards',
  },
  not_expanded: {
    animation: 'fade_out 0.2s  ease forwards',
  }
};

class SelectionOverlay extends Component {
  render() {
    const { isExpanded } = this.props;
    const overlay_style = isExpanded ? style.expanded : style.not_expanded;
    return (
        <div className="overlay" style={overlay_style} />
    );
  }
}


SelectionOverlay.PropTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isExpanded: state.get('menuExpanded'),
});

export const container = connect(mapStateToProps)(SelectionOverlay);



