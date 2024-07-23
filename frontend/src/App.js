import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Console from './components/Console';
import FileExplorer from './components/FileExplorer';

const App = () => {
  const [files, setFiles] = useState([{ name: 'index.js', content: '' }]);
  const [activeFile, setActiveFile] = useState(0);
  const [consoleOutput, setConsoleOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files }),
      });
      const result = await response.json();
      setConsoleOutput(result.output);
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <FileExplorer 
        files={files} 
        setFiles={setFiles} 
        activeFile={activeFile} 
        setActiveFile={setActiveFile} 
      />
      <div className="flex-1 flex flex-col">
        <CodeEditor 
          content={files[activeFile].content}
          onChange={(newContent) => {
            const newFiles = [...files];
            newFiles[activeFile].content = newContent;
            setFiles(newFiles);
          }}
        />
        <Console output={consoleOutput} />
        <button 
          onClick={handleRunCode}
          className="bg-blue-500 text-white p-2 m-2 rounded"
        >
          Run Code
        </button>
      </div>
    </div>
  );
};

export default App;