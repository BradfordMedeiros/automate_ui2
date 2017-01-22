import Appbar from '../components/appbar/Appbar';
import { connect } from 'react-redux';
import { expandMenu, lock } from '../index.js';

const mapStateToProps = (state) => ({
  rotateAddIcon: state.get('menuExpanded'),
  isLocked: state.get('isLocked'),
});

const mapDispatchToProps = dispatch => ({
  onRotatedAddIconClick: () =>  dispatch(expandMenu(false)),
  lockGrid: lockState => dispatch(lock(lockState)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Appbar);
