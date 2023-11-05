import { Injectable } from '@nestjs/common';
import { CreateClientUserDto } from './dto/create-client_user.dto';
import { UpdateClientUserDto } from './dto/update-client_user.dto';

@Injectable()
export class ClientUserService {
  create(createClientUserDto: CreateClientUserDto) {
    return 'This action adds a new clientUser';
  }

  findAll() {
    return `This action returns all clientUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientUser`;
  }

  update(id: number, updateClientUserDto: UpdateClientUserDto) {
    return `This action updates a #${id} clientUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientUser`;
  }
}
