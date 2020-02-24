import { EntityRepository, Repository, getRepository } from 'typeorm';
import { User } from '../../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public findByName(firstName: string, lastName: string): Promise<User> | any {
    return this.findOne({ firstName, lastName });
  }
}
