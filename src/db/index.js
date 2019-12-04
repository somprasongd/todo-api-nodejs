import uuidv4 from 'uuid/v4';

const tasks = [];

export const createTask = text => {
  const newTask = {
    id: uuidv4(),
    text,
    completed: false,
    createAt: new Date(),
    updateAt: new Date(),
  };

  tasks.splice(0, 0, newTask);
  return newTask;
};

export const findTask = (search = '') =>
  search ? tasks.filter(task => task.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : tasks;

export const findTaskById = id => tasks.find(task => task.id === id);

export const toggleTask = id => {
  const taskToUpdate = tasks.find(task => task.id === id);
  taskToUpdate.completed = !taskToUpdate.completed;
  taskToUpdate.updateAt = new Date();
  return taskToUpdate;
};

export const updateTask = task => {
  const taskToUpdate = tasks.find(t => t.id === task.id);
  taskToUpdate.text = task.text;
  taskToUpdate.completed = task.completed;
  taskToUpdate.updateAt = new Date();
  return taskToUpdate;
};

export const deleteTask = id => {
  const deleteIndex = tasks.findIndex(task => task.id === id);
  if (deleteIndex > -1) {
    const deleted = tasks.splice(deleteIndex, 1);
    return deleted[0];
  }
  return null;
};
