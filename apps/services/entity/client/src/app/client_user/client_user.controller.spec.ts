import { Test, TestingModule } from '@nestjs/testing';
import { ClientUserController } from './client_user.controller';
import { ClientUserService } from './client_user.service';

describe('ClientUserController', () => {
  let controller: ClientUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientUserController],
      providers: [ClientUserService],
    }).compile();

    controller = module.get<ClientUserController>(ClientUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
