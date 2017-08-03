import React, { Component, PropTypes } from 'react';
import ItemWrapper from '../components/ItemWrapper';
import EditorControls from '../components/EditorControls';
import Editor from '../components/Editor';

const styles = {
  editor: {
    height: '60%',
    width: '100%',
    border: '1px solid black',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
};

class JavascriptsFields extends Component {
  state = {
    editEnabled: true,
    editorKey: Math.random(),
    code: '',
  }
  render() {
    const { initialText, upload } = this.props;
    return (
      <div>
        <ItemWrapper
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 12,
          }}
        >
          <EditorControls
            disableRevert={!this.state.editEnabled || (initialText === this.state.code)}
            editModeEnabled={this.state.editEnabled}
            onEditModeClicked={() => {
              this.setState({
                editEnabled: !this.state.editEnabled,
              });
            }}
            onUploadClicked={() => {
              if (upload) {
                upload(this.state.code);
              }
            }}
            onRevertClicked={() => {
              this.setState({
                code: initialText,
                editorKey: Math.random(),
              });
            }}
          />
        </ItemWrapper>
        {this.state.editEnabled && (
          <ItemWrapper>
            <Editor
              key={this.state.editorKey}
              initialText={initialText}
              onTextChange={(code) => {
                this.setState({
                  code,
                });
              }}
              style={styles.editor}
            />
          </ItemWrapper>
        )}
      </div>
    );
  }
}


JavascriptsFields.propTypes = {
  initialText: PropTypes.string,
  upload: PropTypes.func,
};

export default JavascriptsFields;
