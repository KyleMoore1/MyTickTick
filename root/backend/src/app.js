const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

const todo_controller = require("./controller/todos");
app.use("/todos", todo_controller);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
