import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../models/UserRepository';

class UserController {
  async index(req: Request, res: Response): Promise<Response> {
    const User = getCustomRepository(UserRepository);
    const users = await User.find();
    return res.json(users);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const User = getCustomRepository(UserRepository);
    const user = await User.findOne(req.params.userId);
    return res.json(user);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const User = getCustomRepository(UserRepository);
    const user = await User.create(req.body);
    const results = await User.save(user);
    return res.json(results);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const User = getCustomRepository(UserRepository);
    const user = await User.findOne(req.params.userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    User.merge(user, req.body);
    const results = await User.save(user);

    return res.json(results);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const User = getCustomRepository(UserRepository);
    const results = await User.delete(req.params.userId);

    return res.json(results);
  }
}

export default new UserController();
