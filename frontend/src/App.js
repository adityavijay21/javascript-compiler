import React, { useState, useCallback } from 'react';
import CodeEditor from './components/CodeEditor';
import Console from './components/Console';
import FileExplorer from './components/FileExplorer';
import './App.css';

const App = () => {

  const [files, setFiles] = useState([
    { name: 'index.js', content: 'console.log("This code is coming from index.js.");' },
  ]);
  const [activeFile, setActiveFile] = useState(0);
  const [output, setOutput] = useState('');
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);


  const handleRunCode = useCallback(async () => {
    try {
      const response = await fetch('https://javascript-compiler-backend.onrender.com/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files }),
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  }, [files]);


  const handleFileChange = useCallback((newContent) => {
    const newFiles = [...files];
    newFiles[activeFile].content = newContent;
    setFiles(newFiles);
  }, [files, activeFile]);


  const handleToggleExplorer = useCallback(() => {
    setIsExplorerOpen(!isExplorerOpen);
  }, [isExplorerOpen]);

  return (
    <div className="app-container">
      <div className={`file-explorer ${isExplorerOpen ? 'open' : 'closed'}`}>
        <button className="toggle-explorer" onClick={handleToggleExplorer}>
          {isExplorerOpen ? '◀' : '▶'}
        </button>
        {isExplorerOpen && (
          <FileExplorer
            files={files}
            setFiles={setFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
        )}
      </div>
      <div className="main-content">
        <div className="editor-container">
          <CodeEditor value={files[activeFile].content} onChange={handleFileChange} />
        </div>
        <div className="control-panel">
          <button className="run-button" onClick={handleRunCode}>
            ▶ Run Code
          </button>
          <Console output={output} />
        </div>
      </div>
    </div>
  );
};

export default App;