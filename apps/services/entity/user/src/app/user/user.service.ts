import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserServiceContract } from '@workspace-nx/contracts';
import { CreateUser, ReadUser, UpdateUser } from '@workspace-nx/swagger';

type userRepository = Repository<User>;

@Injectable()
export class UserService implements UserServiceContract {
  constructor(
    @InjectRepository(User)
    private repository: userRepository
  ) {}

  create(createUserDto: CreateUser) {
    const preSave = this.repository.create(createUserDto);
    return this.repository.save(preSave).then((e) => new ReadUser(e));
  }

  findAll() {
    return this.repository.find().then((e) => e.map((e) => new ReadUser(e)));
  }

  findOne(id: number) {
    return this.repository
      .findOne({ where: { id } })
      .then((e) => new ReadUser(e));
  }

  update(id: number, updateUserDto: UpdateUser) {
    return this.repository
      .update(id, updateUserDto)
      .then(() => this.findOne(id));
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
