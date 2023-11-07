import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateCustomer,
  ReadCustomer,
  UpdateCustomer,
} from '@workspace-nx/swagger';
import { CustomerServiceContract } from '@workspace-nx/contracts';

@Injectable()
export class CustomerService implements CustomerServiceContract {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}
  ß;

  create(createCustomerDto: CreateCustomer) {
    return this.customerRepository
      .save(createCustomerDto)
      .then((e) => new ReadCustomer(e));
  }

  findAll() {
    return this.customerRepository
      .find()
      .then((e) => e.map((e) => new ReadCustomer(e)));
  }

  findOne(id: number) {
    return this.customerRepository
      .findOne({
        where: { id },
        relations: ['clients'],
      })
      .then((e) => new ReadCustomer(e));
  }

  update(id: number, updateCustomerDto: UpdateCustomer) {
    return this.findOne(id)
      .then((customer) => {
        const updatedCustomer = {
          ...customer,
          ...updateCustomerDto,
        };
        return this.customerRepository.save(updatedCustomer);
      })
      .then((e) => new ReadCustomer(e));
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
