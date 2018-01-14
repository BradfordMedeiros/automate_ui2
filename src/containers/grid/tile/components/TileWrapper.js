import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveContent, deleteTile } from '../../module/module';

class TileWrapper extends Component {
  handleContextMenu = (event) => {
    event.preventDefault();
    if (this.props.isEditable) {
      this.props.deleteTile();
    }
  };
  render() {
    const { children, tileKey, savedContent, onSaveContent } = this.props;
    const saveContentForTile = (content, tileKey) => onSaveContent(content, tileKey);
    return (
      <div onContextMenu={this.handleContextMenu}>
        {children({ savedContent: savedContent.get(tileKey), saveContent: saveContentForTile })}
      </div>
    );
  }
}

TileWrapper.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  tileKey: PropTypes.string.isRequired,
  deleteTile: PropTypes.func.isRequired,
  savedContent: PropTypes.object,
  onSaveContent: PropTypes.func,
  children: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  savedContent: state.getIn(['gridReducer', 'savedTileContent']),
  isEditable: !state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSaveContent: (content, tileKey) => {
    if (tileKey){
      dispatch(saveContent(tileKey, content));
    }else{
      dispatch(saveContent(ownProps.tileKey, content));
    }
  },
  deleteTile: () => dispatch(deleteTile(ownProps.tileKey)),
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(TileWrapper);

export default Wrapper;
