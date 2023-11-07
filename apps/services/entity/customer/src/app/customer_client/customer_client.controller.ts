import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomerClientService } from './customer_client.service';
import { CreateCustomerClient, UpdateCustomerClient } from '@workspace-nx/documentation';

@Controller()
export class CustomerClientController {
  constructor(private readonly customerClientService: CustomerClientService) {}

  @MessagePattern('createCustomerClient')
  create(@Payload() createCustomerClientDto: CreateCustomerClient) {
    return this.customerClientService.create(createCustomerClientDto);
  }

  @MessagePattern('findAllCustomerClient')
  findAll() {
    return this.customerClientService.findAll();
  }

  @MessagePattern('findOneCustomerClient')
  findOne(@Payload() id: number) {
    return this.customerClientService.findOne(id);
  }

  @MessagePattern('updateCustomerClient')
  update(@Payload() updateCustomerClientDto: UpdateCustomerClient) {
    return this.customerClientService.update(updateCustomerClientDto.id, updateCustomerClientDto);
  }

  @MessagePattern('removeCustomerClient')
  remove(@Payload() id: number) {
    return this.customerClientService.remove(id);
  }
}
