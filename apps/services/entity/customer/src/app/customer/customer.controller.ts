import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomerService } from './customer.service';
import { CreateCustomer, UpdateCustomer } from '@workspace-nx/swagger';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @MessagePattern('createCustomer')
  create(@Payload() createCustomerDto: CreateCustomer) {
    return this.customerService.create(createCustomerDto);
  }

  @MessagePattern('findAllCustomer')
  findAll() {
    return this.customerService.findAll();
  }

  @MessagePattern('findOneCustomer')
  findOne(@Payload() id: number) {
    return this.customerService.findOne(id);
  }

  @MessagePattern('updateCustomer')
  update(@Payload() updateCustomerDto: UpdateCustomer) {
    return this.customerService.update(updateCustomerDto.id, updateCustomerDto);
  }

  @MessagePattern('removeCustomer')
  remove(@Payload() id: number) {
    return this.customerService.remove(id);
  }
}
