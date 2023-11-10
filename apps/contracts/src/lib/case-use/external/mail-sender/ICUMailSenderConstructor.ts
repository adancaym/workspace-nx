import { IMailSender } from '../../../entities';
import { ICUMailSender } from './ICUMailSender';

export interface ICUMailSenderConstructor {
  emailDto: IMailSender;
  service: ICUMailSender;
}
