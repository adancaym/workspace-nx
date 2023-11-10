import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '@workspace-nx/contracts';

export class User implements IUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
  }
}
