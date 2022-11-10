const express = require("express");
const app = express();
app.use(express.json());

const tasks = [];
let id = 1;

const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
};

app.use(cors);

app.get("/tasks", (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTask = tasks.filter((task) =>
      task.description.includes(description)
    );
    res.json(filteredTask);
    return;
  }
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  res.json(task);
});

app.post("/tasks", (req, res) => {
  const { description } = req.body;
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  if (description) {
    task.description = description;
  }
  if (done) {
    task.done = !!done;
  }
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.findIndex((task) => task.id === +id);
  if (index === -1) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
