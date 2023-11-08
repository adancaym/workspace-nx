import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  ReadClient,
  RegisterClient,
  RegisterCustomer,
  RegisterUser,
} from '@workspace-nx/swagger';

@Controller()
@ApiResponse({ status: 403, description: 'Forbidden.' })
@ApiResponse({ status: 400, description: 'Bad Request.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.' })
@ApiTags('Authentication')
export class RegisterController {
  constructor(private readonly service: RegisterService) {}

  @Post('register/user')
  registerUser(@Body() user: RegisterUser) {
    return this.service.registerUser(user);
  }

  @Post('register/customer')
  registerClient(@Body() client: RegisterCustomer) {
    return this.service.registerCustomer(client);
  }

  @Post('register/client')
  @ApiBody({ type: RegisterClient })
  @ApiResponse({
    status: 201,
    description: 'The client has been successfully created.',
    type: ReadClient,
  })
  registerCustomer(@Body() customer: RegisterClient): Promise<ReadClient> {
    return this.service.registerClient(customer);
  }
}
