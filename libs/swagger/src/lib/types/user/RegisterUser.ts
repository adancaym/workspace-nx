import { ApiProperty } from '@nestjs/swagger';
import { IRegisterUser } from '@workspace-nx/contracts';

export class RegisterUser implements IRegisterUser {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  client: number;

  constructor(data: IRegisterUser) {
    this.email = data.email;
    this.password = data.password;
    this.client = data.client;
  }
}
