const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
require("dotenv").config();


// file consts
const connect = require("./database/db.js");
// route redirection
const userRouter = require("./routes/routes.js");
app.use(bodyParser.json());
// app.use(cookieParser())
app.use(cors());

app.use("/auth", userRouter);

connect();
app.listen(`${process.env.PORT}`, () => { console.log(`server is running on the port 🚀 ${process.env.PORT}🚀`) })