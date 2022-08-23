const express = require("express");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");

require("dotenv").config();

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());


app.use("/person", personRoutes);


const DB_USER= process.env.DB_USER
const DB_PASSWORD= encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rsnwzau.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connect to mongoDB");
    app.listen(3333);
  })
  .catch((error) => console.log(error));
