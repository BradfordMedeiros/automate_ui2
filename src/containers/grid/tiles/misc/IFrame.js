import React, { Component, PropTypes } from 'react';

class IFrameTile extends Component {
  render() {
    const { savedContent, isEditing } = this.props;
    return savedContent ? (
      <iframe
        alt="Cannot load custom content"
        src={ savedContent }
        allowFullScreen
        style={{  border: '0 none', height: '100%', width: '100%', pointerEvents: isEditing ? 'none': undefined }}
      />) : <div>No Content</div>;
  }
}

IFrameTile.propTypes = {
  savedContent: PropTypes.any,
};

export const tile = IFrameTile;
