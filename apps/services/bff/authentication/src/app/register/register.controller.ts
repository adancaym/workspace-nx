import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { ApiTags } from '@nestjs/swagger';
import { IRegisterClient, IRegisterCustomer, IRegisterUser } from '@workspace-nx/models';


@Controller()
@ApiTags('Authentication')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}


  @Post('register/user')
  registerUser(@Body() user: IRegisterUser) {
    return this.registerService.registerUser(user);
  }

  @Post('register/customer')
  registerClient(@Body() client: IRegisterCustomer) {
    return this.registerService.registerCustomer(client);
  }

  @Post('register/client')
  registerCustomer(@Body() customer: IRegisterClient) {
    return this.registerService.registerClient(customer);
  }
}
