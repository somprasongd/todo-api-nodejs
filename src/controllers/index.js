import * as db from '../db';

export const handleCreateTask = (req, res) => {
  const { text } = req.body;

  if (!text)
    return res.status(400).send({
      status: 'error',
      message: '"text" is required!',
    });

  const task = db.createTask(text);

  res.status(201).send({ status: 'success', data: task });
};

export const handleListTask = (req, res) => {
  const { search } = req.query;

  const tasks = db.findTask(search);

  res.send({ status: 'success', data: tasks });
};

export const handleGetTask = (req, res) => {
  const { id } = req.params;

  const task = db.findTaskById(id);

  if (!task)
    return res.status(404).send({
      status: 'error',
      message: 'Task not found',
    });

  res.send({ status: 'success', data: task });
};

export const handleUpdateTask = (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  if (!text || !completed)
    return res.status(400).send({
      status: 'error',
      message: 'At least 1 between text and completed',
    });

  let task = db.findTaskById(id);

  if (!task)
    return res.status(404).send({
      status: 'error',
      message: 'Task not found',
    });

  if (text) task.text = text;
  if (completed) task.completed = completed;

  task = db.updateTask(task);

  res.send({ status: 'success', data: task });
};

export const handleDeleteTask = (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      status: 'error',
      message: '"id" is required!',
    });

  db.deleteTask(id);

  res.status(204).end();
};
