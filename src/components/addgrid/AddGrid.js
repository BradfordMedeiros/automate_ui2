import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './style.css';


class AddGrid extends Component {
  render() {
    return <div className="components_add_grid">hello world</div>
  }
}




AddGrid.propTypes = {
  isExpanded:  PropTypes.bool,
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  expandMenu: () =>  dispatch(expandMenu(false)),
  lockGrid: lockState => dispatch(lock(lockState)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(AddGrid);
