import { ApiProperty } from '@nestjs/swagger';
import { IUpdateUser } from '@workspace-nx/contracts';

export class UpdateUser implements IUpdateUser {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  id: number;

  constructor(data: IUpdateUser) {
    this.email = data.email;
    this.password = data.password;
    this.id = data.id;
  }
}
