import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerClient } from './entities/customer_client.entity';
import { Repository } from 'typeorm';
import { CustomerClientServiceContract } from '@workspace-nx/models';
import { CreateCustomerClient, ReadCustomerClient, UpdateCustomerClient } from '@workspace-nx/documentation';

@Injectable()
export class CustomerClientService implements CustomerClientServiceContract{

  constructor(
    @InjectRepository(CustomerClient)
    private readonly repository: Repository<CustomerClient>,
  ) {}

  create(createCustomerClientDto: CreateCustomerClient): Promise<ReadCustomerClient> {
    return this.repository.save(createCustomerClientDto)
    .then( e => new ReadCustomerClient(e));
  }

  findAll(): Promise<ReadCustomerClient[]> {
    return this.repository.find().then( e => e.map( e => new ReadCustomerClient(e)));
  }

  findOne(id: number): Promise<ReadCustomerClient>{
    return this.repository.findOne({ where: { id }});
  }

  update(id: number, updateCustomerClientDto: UpdateCustomerClient): Promise<ReadCustomerClient> {
    return this.repository.update(id, updateCustomerClientDto)
    .then( () => this.findOne(id));
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
