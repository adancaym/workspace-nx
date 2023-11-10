import {
  IMailSender,
  ICUMailSender,
  ICUMailSenderConstructor,
  IMailSenderServiceContract,
} from '@workspace-nx/contracts';

export class CUSendMail implements ICUMailSender {
  emailDto: IMailSender;
  service: IMailSenderServiceContract;

  constructor({ emailDto, service }: ICUMailSenderConstructor) {
    this.emailDto = emailDto;
    this.service = service;
  }

  sendMail(): Promise<boolean> {
    return this.service.sendMail(this.emailDto);
  }
}
