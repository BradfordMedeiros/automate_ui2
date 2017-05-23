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
    editEnabled: false,
  }
  render() {
    const { initialText, upload } = this.props;
    return (
      <div>
        <ItemWrapper
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <EditorControls
            hideUpload
            hideRevert
            editModeEnabled={this.state.editEnabled}
            onEditModeClicked={() => {
              this.setState({
                editEnabled: !this.state.editEnabled,
              });
            }}
          />
        </ItemWrapper>
        {this.state.editEnabled && (
          <ItemWrapper>
            <Editor
              initialText={initialText}
              readOnly
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
