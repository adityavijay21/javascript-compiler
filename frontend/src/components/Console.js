import React from 'react';

const Console = ({ output }) => {
  return (
    <div className="bg-black text-white p-4 h-40 overflow-y-auto">
      <pre>{output}</pre>
    </div>
  );
};

export default Console;