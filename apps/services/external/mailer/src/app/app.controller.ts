import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern , Payload} from '@nestjs/microservices';
import { IMailSender } from '@workspace-nx/contracts';

@Controller()
export class AppController {
  constructor(private service: AppService) {}

  @EventPattern('createSenderEmail')
  sendMail(@Payload() mail: IMailSender) {
    return this.service.sendMail(mail);
  }
}
