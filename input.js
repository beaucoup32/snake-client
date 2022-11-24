
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

  if (input == 'w') {
    //console.log(`You pressed ${input}`);
    connection.write('Move: up');
    stdin.resume();
  }

  if (input == 'a') {
    //console.log(`You pressed ${input}`);
    connection.write('Move: left');
    stdin.resume();
  }

  if (input == 's') {
    //console.log(`You pressed ${input}`);
    connection.write('Move: down');
    stdin.resume();
  }

  if (input == 'd') {
    //console.log(`You pressed ${input}`);
    connection.write('Move: right')
    stdin.resume();
  }

  if (input === 'j') {
    
    connection.write(`Say: VidiVici`);
    stdin.resume(); 
  }

  if (input === 'k') {
    
    connection.write(`Say: Bite Me!`);
    stdin.resume(); 
  }

  if (input === 'l') {
    
    connection.write(`Say: SsssSSSSsssSSs..`);
    stdin.resume(); 
  }

  //console.log(input);
}

stdin.on('data', handleUserInput);

module.exports = { setupInput }