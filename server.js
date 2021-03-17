const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("connect success"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.send("Hello AJ");
});

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
