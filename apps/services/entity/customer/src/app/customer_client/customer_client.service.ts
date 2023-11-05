import { Injectable, Controller } from '@nestjs/common';
import { CreateCustomerClientDto } from './dto/create-customer_client.dto';
import { UpdateCustomerClientDto } from './dto/update-customer_client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerClient } from './entities/customer_client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerClientService {


  constructor(
    @InjectRepository(CustomerClient)
    private readonly repository: Repository<CustomerClient>,
  ) {}

  create(createCustomerClientDto: CreateCustomerClientDto) {
    return this.repository.save(createCustomerClientDto);
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

  update(id: number, updateCustomerClientDto: UpdateCustomerClientDto) {
    return this.repository.update(id, updateCustomerClientDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
