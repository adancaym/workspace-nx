import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { ClientProxy } from '@nestjs/microservices';
import { UserEntityService } from '@workspace-nx/configs';

describe('UserService', () => {
  let service: UserService;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserEntityService],
      providers: [
        UserService,
        {
          provide: ClientProxy,
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
