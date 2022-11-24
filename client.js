const net = require("net");
const { IP , PORT } = require('./constants');

const connect = (data) => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {

    console.log("Successfully Connected to Game Server.");
    conn.write('Name: DON');
  
    // setInterval(() => {

    //   conn.write('Move: up');
    // }, 80);

  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
