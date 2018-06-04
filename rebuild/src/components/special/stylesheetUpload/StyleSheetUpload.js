import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import File from './components/File';

class StyleSheetUploadDialog extends Component {
  state = {
    fileContent: null,
  };
  render() {
    const {open, onRequestClose, onUploadStyle, onDownloadStyle, onDeleteStyle} = this.props;

    return (
      <Dialog
        open={open}
        onRequestClose={() => {
          this.setState({
            fileContent: null,
          });
          onRequestClose();
        }}
        bodyStyle={{
          background: 'rgb(10,10,10)',
          borderLeft: '1px solid steelblue',
          borderRight: '1px solid steelblue',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <FlatButton
            onClick={() => { onUploadStyle(this.state.fileContent); }}
            disabled={this.state.fileContent === null}
            label="Upload StyleSheet"
            labelStyle={{color: this.state.fileContent === null ? 'grey': 'steelblue'}}
          />
          <FlatButton onClick={onDownloadStyle} label="Download Current Stylesheet"/>
          <FlatButton onClick={onDeleteStyle} label="Delete Stylesheet"/>
        </div>
        <File
          style={{
            margin: 8,
            marginLeft: 48,
            background: 'steelblue',
            border: '1px solid black',
          }}
          onChange={fileContent => {
            this.setState({
              fileContent,
            });
          }}
        />
      </Dialog>
    )
  }
}

StyleSheetUploadDialog.propTypes = {
  showUploadDialog: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onUploadStyle: PropTypes.func,
  onDownloadStyle: PropTypes.func,
  onDeleteStyle: PropTypes.func,
};

export default StyleSheetUploadDialog;

