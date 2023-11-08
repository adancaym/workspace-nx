import { ApiProperty } from '@nestjs/swagger';
import { IClientUser, IId } from '@workspace-nx/contracts';
import { Client } from '../client';

export class ClientUser implements IClientUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  client: IId | Client;

  constructor(partial: IClientUser) {
    this.id = partial.id;
    this.userId = partial.userId;
    this.client = partial.client;
  }
}
