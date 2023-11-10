import { Test, TestingModule } from '@nestjs/testing';
import { MailerService } from './mailer.service';
import { ClientProxy } from '@nestjs/microservices';
import { MailSenderService } from '@workspace-nx/configs';

describe('MailerService', () => {
  let service: MailerService;
  const mockClientProxy = {
    send: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MailSenderService],
      providers: [
        MailerService,
        {
          provide: ClientProxy,
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<MailerService>(MailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
