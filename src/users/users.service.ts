import { Injectable } from '@nestjs/common';
import { IUsersRepository } from './interfaces/users.repository.interface';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }
}
