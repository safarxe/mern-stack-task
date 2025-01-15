const express = require("express");
const mongoose = require("mongoose");
const Route = require("./routes/route.js");

const DB_URL =
  "mongodb+srv://safar:safar@cluster0.xsi5e.mongodb.net/";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/api/products", Route);

mongoose.connect(DB_URL).then(() => {
  console.log("Connect");
  app.listen(PORT, () => {
    console.log(`Port ${PORT}`);
  });
});