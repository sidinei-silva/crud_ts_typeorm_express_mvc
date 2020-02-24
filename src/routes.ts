import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Routes' });
});

routes.get('/users', UserController.index);
routes.get('/users/:userId', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:userId', UserController.update);
routes.delete('/users/:userId', UserController.delete);

export default routes;
