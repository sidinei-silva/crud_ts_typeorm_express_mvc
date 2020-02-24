import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../models/UserRepository';

class UserController {
  index(req: Request, res: Response): Response {
    const User = getCustomRepository(UserRepository);
    const users = User.find();
    return res.json(users);
  }
}

export default new UserController();
