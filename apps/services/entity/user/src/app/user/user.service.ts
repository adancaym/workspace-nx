import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

type userRepository = Repository<User>;


@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User)
    private repository: userRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    const preSave = this.repository.create(createUserDto);
    return this.repository.save(preSave);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(
     {
        where: { id }
     }
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
