import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import './CodeEditor.css';

const CodeEditor = ({ value, onChange }) => (
  <div className="code-editor">
    <MonacoEditor
      height="100%"
      language="javascript"
      theme="vs-dark"
      value={value}
      onChange={onChange}
      options={{
        fontSize: 16,
        minimap: {
          enabled: true,
          side: 'right'
        },
        scrollbar: {
          vertical: 'visible',
          horizontal: 'visible'
        },
        lineNumbers: 'on',
        renderLineHighlight: 'all',
        overviewRulerBorder: false,
        scrollBeyondLastLine: false,
        cursorSmoothCaretAnimation: true,
        cursorBlinking: 'phase'
      }}
    />
  </div>
);

export default CodeEditor;