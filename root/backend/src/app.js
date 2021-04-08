const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

//database stuff
mongoose.connect("mongodb://localhost:27017/myTickTick", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database"));

//middlewares
app.use(express.json());
app.use(cors());

const todo_controller = require("./controller/todos");
app.use("/todos", todo_controller);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
