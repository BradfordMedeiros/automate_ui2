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
    rate: null,
  }
  render() {
    const { initialText, upload, name, rate, showRate } = this.props;
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
            showRate={showRate}
            rate={this.state.rate || rate || 1000}
            onRateChange={rate => { this.state.rate =  rate; }}
            editModeEnabled={this.state.editEnabled}
            onEditModeClicked={() => {
              this.setState({
                editEnabled: !this.state.editEnabled,
              });
            }}
            onUploadClicked={() => {
              if (upload) {
                upload(this.state.code, this.state.rate);
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
              name={name}
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
  showRate: PropTypes.bool,
  rate: PropTypes.number,
  upload: PropTypes.func,
  name: PropTypes.string,
};

export default JavascriptsFields;
