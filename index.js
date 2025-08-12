// require express app
const express = require("express");
const app = express();

// import chat
const Chat = require("./models/chat");

// require path
const path = require("path");

// to set the directiory where your views file are located
app.set("views", path.join(__dirname, "views"));
// set view engine to ejs
app.set("view engine", "ejs");

// To use static file path
app.use(express.static(path.join(__dirname, "public")));
// To parse data from req.body in post req
app.use(express.urlencoded({ extended: true }));

// mongoose setup
const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//using chat model
// let chat1 = new Chat({
//   from: "Neha",
//   to: "Priya",
//   message: "hii! what's up?",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const port = 8080;

app.get("/", (req, res) => {
  res.send("hello express");
});

// index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index", { chats });
});

// new chat route
app.get("/chats/new", (req, res) => {
  res.render("newChat");
});

// post req form new chat
app.post("/chats", (req, res) => {
  const { from, message, to } = req.body;
  const newChat = new Chat({
    from,
    message,
    to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => "chat saved successfully")
    .catch((err) => console.log(err));
  res.redirect("/chats");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
