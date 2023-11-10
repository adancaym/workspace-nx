import { Inject } from '@nestjs/common';
import { MailSenderServiceName } from '../../constants';

export const MaailSenderClientService = Inject(MailSenderServiceName);
