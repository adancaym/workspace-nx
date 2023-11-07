import { Injectable } from '@nestjs/common';
import {
  CreateClientUser,
  ReadClientUser,
  UpdateClientUser,
} from '@workspace-nx/swagger';
import { ClientUserServiceContract } from '@workspace-nx/contracts';
import { ClientUser } from './entities/client_user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientUserService implements ClientUserServiceContract {
  constructor(
    @InjectRepository(ClientUser)
    private repository: Repository<ClientUser>
  ) {}

  create(createClientUserDto: CreateClientUser) {
    return this.repository
      .save(createClientUserDto)
      .then((e) => new ReadClientUser(e));
  }

  findAll() {
    return this.repository
      .find()
      .then((e) => e.map((e) => new ReadClientUser(e)));
  }

  findOne(id: number) {
    return this.repository
      .findOne({ where: { id } })
      .then((e) => new ReadClientUser(e));
  }

  update(id: number, updateClientUserDto: UpdateClientUser) {
    return this.repository
      .update(id, updateClientUserDto)
      .then(() => this.findOne(id));
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
