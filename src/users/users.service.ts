import { Injectable } from '@nestjs/common';

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
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async update(
    id: string,
    updateUserDto: { name: string; email: string },
  ): Promise<User | null> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  async remove(id: string): Promise<User | null> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      const removedUser = this.users[userIndex];
      this.users.splice(userIndex, 1);
      return removedUser;
    }
    return null;
  }
}
