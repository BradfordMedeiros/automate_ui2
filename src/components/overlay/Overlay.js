import React, { Component, PropTypes } from 'react';
import { Mobile, Desktop } from '../../util/ViewportSizing';
import './style.css';

const style = {
  desktop: {
    expanded: {
      animation: 'fade_in 0.1s  ease forwards',
    },
    not_expanded: {
      animation: 'fade_out 0.1s  ease forwards',
    }
  },
  mobile: {
    expanded: {
      animation: 'fade_in_mobile 0.1s  ease forwards',
    },
    not_expanded: {
      animation: 'fade_out_mobile 0.1s  ease forwards',
    }
  },

};

class SelectionOverlay extends Component {
  render() {
    const { isExpanded, left, right, Content } = this.props;
    const desktopStyle = isExpanded ? style.desktop.expanded : style.desktop.not_expanded;
    const mobileStyle = isExpanded ? style.mobile.expanded: style.mobile.not_expanded;

    const MobileOverlay = (
      <Mobile>
        <div className="overlay" style={{ left, right, ...mobileStyle }}>
          {Content ? <Content /> : null}
        </div>
      </Mobile>
    );

    const DesktopOverlay = (
      <Desktop>
        <div className="overlay" style={{ left, right, ...desktopStyle }}>
          {Content ? <Content /> : null}
        </div>
      </Desktop>
    );

    return (
      <div>
        {DesktopOverlay}
        {MobileOverlay}
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

