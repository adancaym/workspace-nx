import { ApiProperty } from '@nestjs/swagger';
import { ICreateClient } from '@workspace-nx/contracts';

export class CreateClient implements ICreateClient {
  @ApiProperty()
  name: string;

  constructor(data: ICreateClient) {
    this.name = data.name;
  }
}
