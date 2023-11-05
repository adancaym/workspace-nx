import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomerClientService } from './customer_client.service';
import { CreateCustomerClientDto } from './dto/create-customer_client.dto';
import { UpdateCustomerClientDto } from './dto/update-customer_client.dto';

@Controller()
export class CustomerClientController {
  constructor(private readonly customerClientService: CustomerClientService) {}

  @MessagePattern('createCustomerClient')
  create(@Payload() createCustomerClientDto: CreateCustomerClientDto) {
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
  update(@Payload() updateCustomerClientDto: UpdateCustomerClientDto) {
    return this.customerClientService.update(updateCustomerClientDto.id, updateCustomerClientDto);
  }

  @MessagePattern('removeCustomerClient')
  remove(@Payload() id: number) {
    return this.customerClientService.remove(id);
  }
}
