import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import './style.css';

const style = {
  expanded: {
    animation: 'fade_in 0.1s  ease forwards',
  },
  not_expanded: {
    animation: 'fade_out 0.1s  ease forwards',
  }
};

class SelectionOverlay extends Component {
  render() {
    const { isExpanded, left, right, Content } = this.props;   // @todo wo would be nice to add general support for style override
    const overlay_style = isExpanded ? style.expanded : style.not_expanded;
    return (
        <div className="overlay"  style={{ left: left, right: right, ...overlay_style }}>
          {Content ? <Content /> : null}
        </div>
    );
  }
}


SelectionOverlay.PropTypes = {
  isExpanded: PropTypes.bool.isRequired,
  Content: PropTypes.node,
  left: PropTypes.any,
  right: PropTypes.any,
};

export default SelectionOverlay;



