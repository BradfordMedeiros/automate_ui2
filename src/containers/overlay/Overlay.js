import { connect } from 'react-redux';
import Overlay from '../../components/overlay/Overlay';

const mapStateToProps = (state) => ({
  isExpanded: state.getIn(['reducer', 'menuExpanded']),
  content: state.getIn(['reducer', 'content']),
});

export const container = connect(mapStateToProps)(Overlay);




