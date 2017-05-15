import React, { Component, PropTypes } from 'react';
import './style.css';

const style = {
  expanded: {
    animation: 'fade_in 0.1s  ease forwards',
  },
  not_expanded: {
    animation: 'fade_out 0.1s  ease forwards',
  },
};

class SelectionOverlay extends Component {
  render() {
    const { isExpanded, left, right, Content } = this.props;
    const overlayStyle = isExpanded ? style.expanded : style.not_expanded;
    return (
      <div className="overlay" style={{ left, right, ...overlayStyle }}>
        {Content ? <Content /> : null}
      </div>
    );
  }
}

SelectionOverlay.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  left: PropTypes.object,
  right: PropTypes.object,
  Content: PropTypes.node,
};

export default SelectionOverlay;

