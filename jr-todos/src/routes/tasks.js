const express = require("express");
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/tasks");

const taskRouter = express.Router();

taskRouter.get("", getAllTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.post("", getTaskById);
taskRouter.put("/:id", updateTaskById);
taskRouter.delete("/:id", deleteTaskById);

module.exports = taskRouter;