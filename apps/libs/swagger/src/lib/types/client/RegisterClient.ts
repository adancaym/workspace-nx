import { ApiProperty } from '@nestjs/swagger';
import { IRegisterClient } from '@workspace-nx/contracts';

export class RegisterClient implements IRegisterClient {
  @ApiProperty({
    description: 'The name of the client',
    example: 'Client 1',
  })
  name: string;

  @ApiProperty({
    description: 'The customer id',
    example: 1,
  })
  customer: number;

  constructor(data: IRegisterClient) {
    this.name = data.name;
    this.customer = data.customer;
  }
}
