import React, { Component, PropTypes } from 'react';

class GenericOverlay extends Component {
  render() {
    const {
      title,
      children,
    } = this.props;

    return (
      <div style={{ height: '100%', background: '#282828' }}>
        <div
          style={{
            width: '100%',
            background: 'rgb(40,40,40)',
            height: 60,
            fontSize: '140%',
            paddingLeft: 30,
            paddingTop: 20,
            color: 'rgb(160,160,160)',
            borderBottom: '1px solid rgba(0,0,0,0.3)',
            display: 'inline-block',
          }}
        >
          <div style={{ display: 'inline', cursor: 'pointer', paddingRight: 120 }}>{title}</div>
        </div>
        {children}
      </div>
    );
  }
}


GenericOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default GenericOverlay;
