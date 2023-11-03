const mongoose = require("mongoose");
require("dotenv").config()


function connect() {
  mongoose.connect(`${process.env.DATABASE_URL}`,
  {dbName: process.env.DATABASE_NAME}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("⚡ Connected successfully ⚡");
});
}

module.exports = connect;
