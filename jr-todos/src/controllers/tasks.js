const tasks = [];
let id = 1;

//yaml, yml
/**
 * @swagger
 * components:
 *  schemas:
 *   Task:
 *    type: Object
 *    required:
 *     - description
 *    properties:
 *     id:
 *      type: string
 *      description: auto generated unique identifier
 *     description:
 *       type: string
 *       description: description of the task
 *     done:
 *      type: boolean
 *      description: status of the task
 *    example:
 *     id: 1
 *     description: task No.1
 *     done: false
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: return all tasks
 *   tags: [tasks]
 *   parameters:
 *    - name: description
 *      in: query
 *      description: filter task by description
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: The array of tasks
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *        $ref: '#/components/schemas/Task'
 */
const getAllTasks = (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTask = tasks.filter((task) =>
      task.description.includes(description)
    );
    res.json(filteredTask);
    return;
  }
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  res.json(task);
};

const addTask = (req, res) => {
  const { description } = req.body;
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
};

const updateTaskById = (req, res) => {
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
};

const deleteTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.findIndex((task) => task.id === +id);
  if (index === -1) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTaskById,
  deleteTaskById,
};
