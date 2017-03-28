import { PropTypes } from 'react';
import { connect } from 'react-redux';
import './style.css';

const AddGrid = () => (
  return <div className="components_add_grid" />;
)

AddGrid.propTypes = {
    isExpanded:  PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
    onGridItemClick: () =>  dispatch(expandMenu(false)),
    lockGrid: lockState => dispatch(lock(lockState)),
});

export const container = connect(undefined, mapDispatchToProps)(AddGrid);
