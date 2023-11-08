import { ApiProperty } from '@nestjs/swagger';
import { IId, IRegisterCustomer } from '@workspace-nx/contracts';
import { CustomerClient } from '../customerClient';

export class RegisterCustomer implements IRegisterCustomer {
  @ApiProperty()
  name: string;

  @ApiProperty()
  clients: CustomerClient[] | IId[];

  constructor(data: IRegisterCustomer) {
    this.name = data.name;
    this.clients = data.clients;
  }
}
