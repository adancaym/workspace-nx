import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientUserService } from './client_user.service';
import { CreateClientUser, UpdateClientUser } from '@workspace-nx/documentation';


@Controller()
export class ClientUserController {

  constructor(private clientUserService: ClientUserService) {}

  @MessagePattern('createClientUser')
  create(@Payload() createClientUserDto: CreateClientUser) {
    return this.clientUserService.create(createClientUserDto);
  }

  @MessagePattern('findAllClientUser')
  findAll() {
    return this.clientUserService.findAll();
  }

  @MessagePattern('findOneClientUser')
  findOne(@Payload() id: number) {
    return this.clientUserService.findOne(id);
  }

  @MessagePattern('updateClientUser')
  update(@Payload() updateClientUserDto: UpdateClientUser) {
    return this.clientUserService.update(updateClientUserDto.id, updateClientUserDto);
  }

  @MessagePattern('removeClientUser')
  remove(@Payload() id: number) {
    return this.clientUserService.remove(id);
  }
}
