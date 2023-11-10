import { ICUMailSender, IMailSender } from '@workspace-nx/contracts';

export class MailClient implements ICUMailSender {
  dto: IMailSender | undefined;

  sendMail() {
    return Promise.resolve(!!this.dto);
  }
}
