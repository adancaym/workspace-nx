import { IId, IUpdateCustomerClient } from '@workspace-nx/contracts';
import { Customer } from '../customer/Customer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerClient implements IUpdateCustomerClient {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  clientId?: number;

  @ApiProperty()
  customer?: Customer | IId;

  constructor(data: IUpdateCustomerClient) {
    this.id = data.id;
    this.clientId = data.clientId;
    this.customer = data.customer;
  }
}
