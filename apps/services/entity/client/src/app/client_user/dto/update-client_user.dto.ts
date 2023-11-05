import { PartialType } from '@nestjs/mapped-types';
import { CreateClientUserDto } from './create-client_user.dto';

export class UpdateClientUserDto extends PartialType(CreateClientUserDto) {
  id: number;
}
