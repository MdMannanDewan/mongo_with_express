const Chat = require("./models/chat");
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

const chats = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hey, how's your day?",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Pretty good! You?",
    created_at: new Date(),
  },
  {
    from: "Charlie",
    to: "Dana",
    message: "Did you finish the report?",
    created_at: new Date(),
  },
  {
    from: "Dana",
    to: "Charlie",
    message: "Almost done!",
    created_at: new Date(),
  },
  {
    from: "Eve",
    to: "Frank",
    message: "Want to grab lunch?",
    created_at: new Date(),
  },
  {
    from: "Frank",
    to: "Eve",
    message: "Sure, where to?",
    created_at: new Date(),
  },
  {
    from: "Grace",
    to: "Henry",
    message: "Happy Birthday!",
    created_at: new Date(),
  },
  {
    from: "Henry",
    to: "Grace",
    message: "Thanks a lot!",
    created_at: new Date(),
  },
  {
    from: "Ivy",
    to: "Jack",
    message: "Can we talk later?",
    created_at: new Date(),
  },
  {
    from: "Jack",
    to: "Ivy",
    message: "Yes, no problem.",
    created_at: new Date(),
  },
  {
    from: "Kate",
    to: "Leo",
    message: "Where's the meeting?",
    created_at: new Date(),
  },
  { from: "Leo", to: "Kate", message: "Room 402.", created_at: new Date() },
  {
    from: "Mia",
    to: "Nate",
    message: "You free tonight?",
    created_at: new Date(),
  },
  {
    from: "Nate",
    to: "Mia",
    message: "Yep, let's hang out.",
    created_at: new Date(),
  },
  {
    from: "Olivia",
    to: "Paul",
    message: "Congrats on the job!",
    created_at: new Date(),
  },
  {
    from: "Paul",
    to: "Olivia",
    message: "Thank you so much!",
    created_at: new Date(),
  },
  {
    from: "Quinn",
    to: "Ray",
    message: "Need help with code?",
    created_at: new Date(),
  },
  { from: "Ray", to: "Quinn", message: "Yes please!", created_at: new Date() },
  {
    from: "Sara",
    to: "Tom",
    message: "Did you call mom?",
    created_at: new Date(),
  },
  {
    from: "Tom",
    to: "Sara",
    message: "Not yet, will do.",
    created_at: new Date(),
  },
  {
    from: "Uma",
    to: "Victor",
    message: "Send me the file.",
    created_at: new Date(),
  },
  {
    from: "Victor",
    to: "Uma",
    message: "Sent already.",
    created_at: new Date(),
  },
  {
    from: "Wendy",
    to: "Xander",
    message: "See you at 6.",
    created_at: new Date(),
  },
  {
    from: "Xander",
    to: "Wendy",
    message: "I'll be there.",
    created_at: new Date(),
  },
  { from: "Yara", to: "Zane", message: "Game night?", created_at: new Date() },
  { from: "Zane", to: "Yara", message: "Count me in!", created_at: new Date() },
];

Chat.insertMany(chats)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
