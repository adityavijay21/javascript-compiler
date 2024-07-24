import './file-explorer.css';
import React from 'react';
import { Plus, Trash2, File } from 'lucide-react';

const FileExplorer = ({ files, setFiles, activeFile, setActiveFile }) => {
  const addNewFile = () => {
    const fileName = prompt('Enter file name:');
    if (fileName) {
      setFiles([...files, { name: fileName, content: '' }]);
    }
  };

  const removeFile = () => {
    if (activeFile === null) return;

    const fileName = files[activeFile]?.name;
    if (fileName === 'index.js') {
      alert('Cannot delete index.js file.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this file?')) {
      setFiles(files.filter((_, i) => i !== activeFile));
      setActiveFile(files.length > 1 ? Math.max(0, activeFile - 1) : null);
    }
  };

  return (
    <div className="file-explorer">
      <header className="file-explorer-header">
        <h2 className="file-explorer-heading">Files</h2>
      </header>
      <ul className="file-list">
        {files.map((file, index) => (
          <li
            key={index}
            className={`file-list-item ${activeFile === index ? 'active' : ''}`}
            onClick={() => setActiveFile(index)}
          >
            <File size={18} className="file-icon-active" />
            <span className="file-name">{file.name}</span>
            <span className="file-size"> ({file.content.length} characters)</span>
          </li>
        ))}
      </ul>
      <footer className="file-actions">
        <button
          onClick={addNewFile}
          className="action-button add-file-button"
        >
          <Plus size={14} />
          <span>Add File</span>
        </button>
        <button
          onClick={removeFile}
          className="action-button delete-file-button"
          disabled={activeFile === null}
        >
          <Trash2 size={16} />
          <span>Delete File</span>
        </button>
      </footer>
    </div>
  );
};

export default FileExplorer;