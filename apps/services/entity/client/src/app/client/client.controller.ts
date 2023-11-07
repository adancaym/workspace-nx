import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientService } from './client.service';
import { CreateClient, UpdateClient } from '@workspace-nx/swagger';

@Controller()
export class ClientController {
  constructor(private clientService: ClientService) {}

  @MessagePattern('createClient')
  create(@Payload() createClientDto: CreateClient) {
    return this.clientService.create(createClientDto);
  }

  @MessagePattern('findAllClient')
  findAll() {
    return this.clientService.findAll();
  }

  @MessagePattern('findOneClient')
  findOne(@Payload() id: number) {
    return this.clientService.findOne(id);
  }

  @MessagePattern('updateClient')
  update(@Payload() updateClientDto: UpdateClient) {
    return this.clientService.update(updateClientDto.id, updateClientDto);
  }

  @MessagePattern('removeClient')
  remove(@Payload() id: number) {
    return this.clientService.remove(id);
  }
}
