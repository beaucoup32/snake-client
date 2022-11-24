
const { stdin } = require('process');

let connection;

const setupInput = (conn) => {
  connection = conn;
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

  if (input.toLowerCase() == 'w') {
    console.log(`You pressed ${input}`);
    connection.write('Move: up');
  }

  if (input.toLowerCase() == 'a') {
    console.log(`You pressed ${input}`);
    connection.write('Move: left');
  }

  if (input.toLowerCase() == 's') {
    console.log(`You pressed ${input}`);
    connection.write('Move: down');
  }

  if (input.toLowerCase() == 'd') {
    console.log(`You pressed ${input}`);
    connection.write('Move: right');
  }
}

stdin.on('data', handleUserInput);

module.exports = { setupInput }