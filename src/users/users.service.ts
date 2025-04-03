import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }
}
