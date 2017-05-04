import React, { Component, PropTypes } from 'react';
import './style.css';

const defaultText =  "function customState(){ \n"
+ "//Enter your custom state here// Remember to return a value! \n"
+ "// Should be a short running function \n"
+ " // Generally this means long running calls like setInterval are probably wrong \n"
+ "const sampleState = true; return sampleState; } \n"

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      html: "hello",
    }
  }
  render() {
    const {initialText, onTextChange, style} = this.props;
    return (
      <div
        style={{...style, overflow: 'auto', padding: 24, border: '1px solid black', color: 'white', height: '100%', marginLeft: 20, marginRight: 20  }}
        contentEditable
        onInput={(x, y) => onTextChange(x.target.innerText)}
      >
        {initialText}
      </div>

    )
  }
}

CodeEditor.propTypes = {
  style: PropTypes.object,
  initialText: PropTypes.string,
  onTextChange: PropTypes.func,
};

export default CodeEditor;


