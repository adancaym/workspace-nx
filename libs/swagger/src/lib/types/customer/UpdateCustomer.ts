import { IId, IUpdateCustomer } from '@workspace-nx/contracts';
import { Client } from '../client';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerClient } from '../customerClient';

export class UpdateCustomer implements IUpdateCustomer {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  clients: CustomerClient[] | IId[];

  constructor(data: IUpdateCustomer) {
    this.id = data.id;
    this.name = data.name;
    this.clients = data.clients || [];
  }
}
