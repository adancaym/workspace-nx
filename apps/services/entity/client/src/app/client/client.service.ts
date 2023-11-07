import { Injectable } from '@nestjs/common';

import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { ClientServiceContract } from '@workspace-nx/models';
import { CreateClient, ReadClient, UpdateClient } from '@workspace-nx/documentation';

@Injectable()
export class ClientService implements ClientServiceContract{

  constructor(
    @InjectRepository(Client)
    private repository: Repository<Client>,
  ) {}


  create(createClientDto: CreateClient): Promise<ReadClient> {
    return this.repository.save(this.repository.create(createClientDto))
    .then( e => new ReadClient(e));
  }

  findAll(): Promise<ReadClient[]> {
    return this.repository.find()
    .then( e => e.map( e => new ReadClient(e)));
  }

  findOne(id: number): Promise<ReadClient> {
    return this.repository.findOne({ where: { id } })
    .then( e => new ReadClient(e));
  }

  update(id: number, updateClientDto: UpdateClient): Promise<ReadClient> {
    return this.repository.update(id, updateClientDto)
    .then( () => this.findOne(id));
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
