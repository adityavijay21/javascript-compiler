import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ content, onChange }) => {
  return (
    <MonacoEditor
      height="60vh"
      language="javascript"
      theme="vs-dark"
      value={content}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
  );
};

export default CodeEditor;
