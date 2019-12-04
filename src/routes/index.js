import * as controller from '../controllers';

export default app => {
  app.post('/todos', controller.handleCreateTask);

  app.get('/todos', controller.handleListTask);

  app.get('/todos/:id', controller.handleGetTask);

  app.put('/todos/:id', controller.handleUpdateTask);

  app.delete('/todos/:id', controller.handleDeleteTask);
};
