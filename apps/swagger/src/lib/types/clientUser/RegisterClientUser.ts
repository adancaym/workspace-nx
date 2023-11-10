import { ApiProperty } from '@nestjs/swagger';
import { IId, IRegisterClientUser } from '@workspace-nx/contracts';
import { Client } from '../client/Client';

export class RegisterClientUser implements IRegisterClientUser {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  client: IId | Client;

  constructor(data: IRegisterClientUser) {
    this.userId = data.userId;
    this.client = data.client;
  }
}
