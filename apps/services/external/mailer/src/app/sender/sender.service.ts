import { Injectable } from '@nestjs/common';
import { IMailSenderServiceContract } from '@workspace-nx/contracts';
import { MailSender } from '@workspace-nx/swagger';
import { MailClient } from '@workspace-nx/external';
import { CUSendMail } from '@workspace-nx/case-use';

@Injectable()
export class SenderService implements IMailSenderServiceContract {
  sendMail(emailDto: MailSender): Promise<boolean> {
    const service = new MailClient();
    const caseUse = new CUSendMail({ emailDto, service });
    return caseUse.sendMail();
  }
}
