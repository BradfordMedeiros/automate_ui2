import Appbar from '../components/appbar/Appbar';
import { connect } from 'react-redux';
import { expandMenu, lock } from '../index.js';

const mapStateToProps = (state) => ({
  rotateAddIcon: state.getIn(['reducer','menuExpanded']),
  isLocked: state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = dispatch => ({
  onRotatedAddIconClick: () =>  dispatch(expandMenu(false)),
  lockGrid: lockState => dispatch(lock(lockState)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Appbar);
