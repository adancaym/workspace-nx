import { ApiProperty } from '@nestjs/swagger';
import { IClient, IId } from '@workspace-nx/contracts';
import { ClientUser } from '../clientUser';

export class Client implements IClient {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  users?: ClientUser[] | IId[];

  constructor(data: IClient) {
    this.id = data.id;
    this.name = data.name;
    this.users = data.users;
  }
}
