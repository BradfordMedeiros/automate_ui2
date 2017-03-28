import Appbar from '../components/appbar/Appbar';
import { connect } from 'react-redux';
import { expandMenu, lock, addTile, setMenu } from './grid/module.js';

const mapStateToProps = (state) => ({
    rotateAddIcon: state.getIn(['reducer','menuExpanded']),
    isLocked: state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = dispatch => ({
    onRotatedAddIconClick: () =>  dispatch(expandMenu(false)),
    lockGrid: lockState => dispatch(lock(lockState)),
    onTileClick: tileName =>  dispatch(addTile(tileName)),
    onToggle: (x, elementIsToggled) => dispatch(lock(!elementIsToggled)),
    onHideMenu: ()  => dispatch(setMenu()),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Appbar);
