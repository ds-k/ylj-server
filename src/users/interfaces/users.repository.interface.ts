import { User } from '@prisma/client';

export interface IUsersRepository {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User | null>;
}
