import React from 'react';
import './style.css';

const defaultText =  "function customState(){ \n"
+ "//Enter your custom state here// Remember to return a value! \n"
+ "// Should be a short running function \n"
+ " // Generally this means long running calls like setInterval are probably wrong \n"
+ "const sampleState = true; return sampleState; } \n"

const CodeEditor = () => (
  <div className="codeEditorOuter">
    <div className="codeEditor" contentEditable>
      {defaultText}
    </div>
  </div>
);

export default CodeEditor;