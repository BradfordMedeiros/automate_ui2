import { connect } from 'react-redux';
import Overlay from '../components/overlay/Overlay';

const mapStateToProps = (state) => ({
  isExpanded: state.get('menuExpanded'),
  content: state.get('content'),
});

export const container = connect(mapStateToProps)(Overlay);




