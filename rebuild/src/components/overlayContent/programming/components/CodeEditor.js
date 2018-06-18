import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/searchbox';
import 'brace/ext/language_tools';

class CodeEditor extends Component {
  text = '';

  constructor(props) {
    super(props);
    this.text = props.initialText;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.text = nextProps.initialText;
    }
  }

  render() {
    const {onTextChange} = this.props;
    return (
        <div style={{ display: 'flex',  flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
          <AceEditor
              ref={ref => {
                if (ref) {
                  ref.editor.resize();
                  setTimeout(() => {
                    ref.editor.resize()
                  }, 100)
                }
              }}
              style={{ position: 'absolute', width: '100%', height: '100%'}}
              mode="javascript"
              theme="monokai"
              name="ace_editor"
              onLoad={() => {
              }}
              onChange={newCode => {
                this.text = newCode;
                onTextChange(newCode)
              }}
              fontSize={18}
              showGutter={true}
              highlightActiveLine={true}
              enableBasicAutocompletion
              enableLiveAutocompletion
              showPrintMargin={false}
              value={this.text}
          />
        </div>
    );
  }
}

CodeEditor.propTypes = {
  initialText: PropTypes.string,
  onTextChange: PropTypes.func,
  name: PropTypes.string,
};

export default CodeEditor;
