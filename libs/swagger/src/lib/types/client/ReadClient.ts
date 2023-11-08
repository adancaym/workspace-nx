import { ApiProperty } from '@nestjs/swagger';
import { IReadClient } from '@workspace-nx/contracts';

export class ReadClient implements IReadClient {
  @ApiProperty({
    description: 'The client id',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the client',
    example: 'Client 1',
  })
  name: string;

  constructor(data: IReadClient) {
    this.name = data.name;
    this.id = data.id;
  }
  
}
