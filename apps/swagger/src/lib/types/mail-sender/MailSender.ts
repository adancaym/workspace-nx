import { ApiProperty } from '@nestjs/swagger';
import { IMailSender } from '@workspace-nx/contracts';

export class MailSender implements IMailSender {
  @ApiProperty({
    example: 'asd@domain.com',
    description: 'Email to send the message to',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'Subject',
    description: 'Subject of the email',
    required: true,
  })
  subject: string;

  @ApiProperty({
    example: 'Body',
    description: 'Body of the email',
    required: true,
  })
  body: string;

  constructor(data: IMailSender) {
    this.email = data.email;
    this.subject = data.subject;
    this.body = data.body;
  }
}
