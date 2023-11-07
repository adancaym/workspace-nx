import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { ApiTags } from '@nestjs/swagger';
import {
  RegisterClient,
  RegisterCustomer,
  RegisterUser,
} from '@workspace-nx/swagger';

@Controller()
@ApiTags('Authentication')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register/user')
  registerUser(@Body() user: RegisterUser) {
    return this.registerService.registerUser(user);
  }

  @Post('register/customer')
  registerClient(@Body() client: RegisterCustomer) {
    return this.registerService.registerCustomer(client);
  }

  @Post('register/client')
  registerCustomer(@Body() customer: RegisterClient) {
    return this.registerService.registerClient(customer);
  }
}
