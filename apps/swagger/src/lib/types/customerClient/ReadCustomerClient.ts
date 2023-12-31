import { ApiProperty } from '@nestjs/swagger';
import { IId, IReadCustomerClient } from '@workspace-nx/contracts';
import { Customer } from '../customer/Customer';

export class ReadCustomerClient implements IReadCustomerClient {
  @ApiProperty()
  id: number;

  @ApiProperty()
  clientId: number;

  @ApiProperty()
  customer?: IId | Customer;

  constructor(data: IReadCustomerClient) {
    this.id = data.id;
    this.clientId = data.clientId;
    this.customer = data.customer;
  }
}
