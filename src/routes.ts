import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Routes' });
});

routes.get('/users', UserController.index);

export default routes;
