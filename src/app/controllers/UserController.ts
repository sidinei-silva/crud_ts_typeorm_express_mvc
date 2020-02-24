import { Request, Response } from 'express';

class UserController {
  index(req: Request, res: Response): Response {
    return res.json({ message: 'hello user' });
  }
}

export default new UserController();
