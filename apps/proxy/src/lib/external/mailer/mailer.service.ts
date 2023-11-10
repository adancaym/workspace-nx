import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  IMailSender,
  IMailSenderServiceContract,
} from '@workspace-nx/contracts';
import { MaailSenderClientService } from '@workspace-nx/configs';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MailerService implements IMailSenderServiceContract {
  constructor(
    @MaailSenderClientService
    private proxy: ClientProxy
  ) {}

  sendMail(mail: IMailSender): Promise<boolean> {
    return firstValueFrom(this.proxy.emit('createSenderEmail', mail));
  }
}
