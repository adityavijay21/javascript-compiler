import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <CodeIcon className="h-8 w-8 mr-2" />
      <h1 className="text-2xl font-bold">Advanced JS Compiler</h1>
    </header>
  );
};

export default Header;