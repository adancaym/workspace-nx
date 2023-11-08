import { ApiProperty } from '@nestjs/swagger';
import { IId, IReadClientUser } from '@workspace-nx/contracts';
import { Client } from '../client/Client';

export class ReadClientUser implements IReadClientUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  client: IId | Client;

  constructor(partial: ReadClientUser) {
    this.id = partial.id;
    this.userId = partial.userId;
    this.client = partial.client;
  }
}
