import { Injectable } from '@nestjs/common';

import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { ClientServiceContract, IClient, ICreateClient, IUpdateClient } from '@workspace-nx/models';

@Injectable()
export class ClientService implements ClientServiceContract{

  constructor(
    @InjectRepository(Client)private repository: Repository<Client>,
  ) {}


  create(createClientDto: ICreateClient): Promise<IClient> {
    return this.repository.save(this.repository.create(createClientDto));
  }

  findAll(): Promise<IClient[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<IClient> {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateClientDto: IUpdateClient): Promise<IClient> {
    return this.repository.update(id, updateClientDto);
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
