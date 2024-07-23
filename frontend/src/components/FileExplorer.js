import React from 'react';

const FileExplorer = ({ files, setFiles, activeFile, setActiveFile }) => {
  const addNewFile = () => {
    const fileName = prompt('Enter file name:');
    if (fileName) {
      setFiles([...files, { name: fileName, content: '' }]);
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl mb-4">Files</h2>
      <ul>
        {files.map((file, index) => (
          <li 
            key={index} 
            className={`cursor-pointer p-2 ${activeFile === index ? 'bg-blue-600' : ''}`}
            onClick={() => setActiveFile(index)}
          >
            {file.name}
          </li>
        ))}
      </ul>
      <button 
        onClick={addNewFile}
        className="mt-4 bg-green-500 text-white p-2 rounded"
      >
        Add New File
      </button>
    </div>
  );
};

export default FileExplorer;