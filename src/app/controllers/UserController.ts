import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../models/UserRepository';

class UserController {
  async index(req: Request, res: Response): Promise<Response> {
    const User = getCustomRepository(UserRepository);
    const users = await User.find();
    return res.json(users);
  }
}

export default new UserController();
