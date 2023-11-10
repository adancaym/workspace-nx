import { ApiProperty } from '@nestjs/swagger';
import { IId, IReadCustomer } from '@workspace-nx/contracts';
import { CustomerClient } from '../customerClient';

export class ReadCustomer implements IReadCustomer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  clients: CustomerClient[] | IId[];

  constructor(data: IReadCustomer) {
    this.id = data.id;
    this.name = data.name;
    this.clients = data.clients;
  }
}
