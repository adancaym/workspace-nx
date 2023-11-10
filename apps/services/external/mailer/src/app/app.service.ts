import { Injectable } from '@nestjs/common';
import { MailClient } from '@workspace-nx/adapters';
import { CUSendMail } from '@workspace-nx/case-use';
import {
  IMailSender,
  IMailSenderServiceContract,
} from '@workspace-nx/contracts';

@Injectable()
export class AppService implements IMailSenderServiceContract {
  sendMail(emailDto: IMailSender): Promise<boolean> {
    const service = new MailClient();
    const caseUse = new CUSendMail({
      emailDto,
      service,
    });
    return caseUse.sendMail();
  }  
}
