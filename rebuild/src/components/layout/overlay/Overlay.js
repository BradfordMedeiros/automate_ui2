import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const { isExpanded, children } = this.props;
        const desktopStyle = isExpanded ? style.expanded : style.not_expanded;

        return (
            <div className="overlay_outer">
                <div className="overlay" style={{ ...desktopStyle }}>
                    {children}
                </div>
            </div>
        );
    }
}

SelectionOverlay.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

export default SelectionOverlay;

