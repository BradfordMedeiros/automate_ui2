import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
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

  componentWillReceiveProps(nextProps){
    if (this.props.name !== nextProps.name){
      this.text = nextProps.initialText;
    }
  }

  render() {
    const { onTextChange } = this.props;
    return (
      <AceEditor
        style={{ width:  '100%'}}
        mode="javascript"
        theme="monokai"
        name="ace_editor"
        onLoad={() => { }}
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
    );
  }
}

CodeEditor.propTypes = {
  initialText: PropTypes.string,
  onTextChange: PropTypes.func,
  name: PropTypes.string,
};

export default CodeEditor;
