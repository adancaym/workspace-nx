import { Test, TestingModule } from '@nestjs/testing';
import { ClientUserController } from './client_user.controller';
import { ClientUserService } from './client_user.service';

describe('ClientUserController', () => {
  let controller: ClientUserController;

  const mockController = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientUserController],
      providers: [
        {
          provide: ClientUserService,
          useValue: mockController,
        },
      ],
    }).compile();

    controller = module.get<ClientUserController>(ClientUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
