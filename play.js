const { stdin } = require('process');
const { connect } = require('./client')
// establishes a connection with the game server

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  }
}

stdin.on('data', handleUserInput);

console.log("Connecting ...");
connect();
setupInput();