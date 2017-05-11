import { connect } from 'react-redux';
import Overlay from '../components/overlay/Overlay';

const mapStateToProps = state => ({
  isExpanded: state.getIn(['reducer', 'menuExpanded']),
  Content: state.getIn(['gridReducer', 'content']),
});

export const container = connect(mapStateToProps)(Overlay); // eslint-disable-line

