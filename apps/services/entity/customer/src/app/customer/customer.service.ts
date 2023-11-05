import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {


  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
ß

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.save(createCustomerDto);
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: number) {
    return this.customerRepository.findOne(
      {
          where: { id },
          relations: ['clients']
      }
    );
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.findOne(id).then((customer) => {
      const updatedCustomer = {
        ...customer,
        ...updateCustomerDto
      };
      return this.customerRepository.save(updatedCustomer);
    }
    );
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
