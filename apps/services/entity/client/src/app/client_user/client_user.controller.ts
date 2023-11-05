import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientUserService } from './client_user.service';
import { CreateClientUserDto } from './dto/create-client_user.dto';
import { UpdateClientUserDto } from './dto/update-client_user.dto';

@Controller()
export class ClientUserController {
  constructor(private readonly clientUserService: ClientUserService) {}

  @MessagePattern('createClientUser')
  create(@Payload() createClientUserDto: CreateClientUserDto) {
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
  update(@Payload() updateClientUserDto: UpdateClientUserDto) {
    return this.clientUserService.update(updateClientUserDto.id, updateClientUserDto);
  }

  @MessagePattern('removeClientUser')
  remove(@Payload() id: number) {
    return this.clientUserService.remove(id);
  }
}
