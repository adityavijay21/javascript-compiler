import React from 'react';
import './Console.css';

const Console = ({ output }) => {
  return (
    <div className="console-container">
      <div className="console-header">
        <span className="console-label">Console Output:</span>
      </div>
      <div className="console-output">
        <pre className="console-text">{output || 'Run your code to see output here.'}</pre>
      </div>
    </div>
  );
};

export default Console;