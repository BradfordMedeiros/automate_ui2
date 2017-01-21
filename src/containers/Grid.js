import Grid from '../components/grid/Grid';
import { connect } from 'react-redux';
import { expandMenu } from '../index.js';

const mapStateToProps = (state) => ({
  isEditable: !state.get('isLocked'),
});

const mapDispatchToProps = dispatch => ({
  onGridItemClick: () =>  dispatch(expandMenu(true)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Grid);

