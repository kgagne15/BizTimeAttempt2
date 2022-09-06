// /** Database setup for BizTime. */

// const { Client } = require("pg");

// const client = new Client({
//   connectionString: "postgresql://biztimeuser:123biztime!@127.0.0.1:3000/biztime"
// });

// client.connect();


// module.exports = client;

const { Client } = require("pg");

let DB_URI;

// If we're running in test "mode", use our test db
// Make sure to create both databases!

  DB_URI = "postgres://biztime:password@127.0.0.1:3000/biztime";


let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;