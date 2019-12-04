import express from 'express';
import path from 'path';
import routes from './routes';

const PORT = process.env.PORT || 3000;

const main = async () => {
  const app = express();

  app.use(express.json());

  app.use(express.static(path.join(__dirname, 'public')));

  routes(app);

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

main().catch(e => console.log(e));
