const { NodeVM } = require('vm2');

const compileAndRun = async (files) => {
  const vm = new NodeVM({
    console: 'redirect',
    sandbox: {},
    require: {
      external: true,
      builtin: ['fs', 'path'],
    },
  });

  let consoleOutput = '';
  vm.on('console.log', (data) => {
    consoleOutput += data + '\n';
  });

  const mainFile = files.find(file => file.name === 'index.js');
  if (!mainFile) {
    throw new Error('No index.js file found');
  }

  try {
    const result = await vm.run(mainFile.content, 'index.js');
    return consoleOutput + (result !== undefined ? `\nReturned: ${result}` : '');
  } catch (error) {
    throw new Error(`Runtime error: ${error.message}`);
  }
};

module.exports = { compileAndRun };
