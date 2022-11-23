const net = require("net");

const connect = (data) => {
  const conn = net.createConnection({
    host: "172.31.239.24",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully Connected to Game Server.");
    conn.write('Name: DON');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
