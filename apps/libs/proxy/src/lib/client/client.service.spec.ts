import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { ClientProxy } from '@nestjs/microservices';
import { ClientEntityService } from '@workspace-nx/microservices';

describe('ClientService', () => {
  let service: ClientService;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientEntityService],
      providers: [
        ClientService,
        {
          provide: ClientProxy,
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
