import React, { PropTypes } from 'react';
import CodeEditor from '../codeEditor/CodeEditor';

const Editor =  ({ initialText, onTextChange, style }) => (
  <div style={style}>
    <div
      style={{
        boxShadow: '0px 0px 2px 0.1px black',
        width: '100%',
      }}
    >
      <CodeEditor
        onTextChange={onTextChange}
        style={{ height: '100%', width: '100%', background: '#303030' }}
        initialText={initialText}
      />
    </div>
  </div>
);

Editor.propTypes = {
  initialText: PropTypes.string,
  onTextChange: PropTypes.func,
  style: PropTypes.object,
};

export default Editor;

