const express = require("express");
const app = express();

// mongoose setup
const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const port = 8080;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
