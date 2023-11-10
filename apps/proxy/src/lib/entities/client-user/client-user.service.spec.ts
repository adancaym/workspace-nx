import { Test, TestingModule } from '@nestjs/testing';
import { ClientUserService } from './client-user.service';
import { ClientProxy } from '@nestjs/microservices';
import { ClientEntityService } from '@workspace-nx/configs';

describe('ClientUserService', () => {
  let service: ClientUserService;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientEntityService],
      providers: [
        ClientUserService,
        {
          provide: ClientProxy,
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<ClientUserService>(ClientUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
