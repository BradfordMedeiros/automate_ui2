import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveContent, deleteTile } from './module';

class TileWrapper extends Component {
  handleContextMenu = event => {
    event.preventDefault();
    if (this.props.isEditable){
      this.props.deleteTile(this.props.tileKey)
    }
  };
  render() {
    const { children, tileKey, savedContent, saveContent } = this.props;
    const saveContentForTile = content => saveContent(tileKey, content);
    return (
      <div onContextMenu={this.handleContextMenu}>
        {children({ savedContent: savedContent.get(tileKey), saveContent: saveContentForTile })}
      </div>
    );
  }
}

TileWrapper.propTypes = {
  savedContent: PropTypes.object,
  saveContent: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  savedContent: state.getIn(['gridReducer', 'savedTileContent']),
  isEditable: !state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveContent: (tileKey, content) => dispatch(saveContent(tileKey, content)),
  deleteTile: (tileKey) => dispatch(deleteTile(ownProps.tileKey)),
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(TileWrapper);

export default Wrapper;