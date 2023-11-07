import { Test, TestingModule } from '@nestjs/testing';
import { ClientUserService } from './client_user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClientUser } from './entities/client_user.entity';

describe('ClientUserService', () => {
  let service: ClientUserService;

  const mockRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    create: (element) => element,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientUserService,
        {
          provide: getRepositoryToken(ClientUser),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ClientUserService>(ClientUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
