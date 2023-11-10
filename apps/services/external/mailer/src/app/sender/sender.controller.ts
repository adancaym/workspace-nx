import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SenderService } from './sender.service';
import { MailSender } from '@workspace-nx/swagger';

@Controller()
export class SenderController {
  constructor(private readonly senderService: SenderService) {}

  @MessagePattern('createSender')
  create(@Payload() createSenderDto: MailSender) {
    return this.senderService.sendMail(createSenderDto);
  }
}
