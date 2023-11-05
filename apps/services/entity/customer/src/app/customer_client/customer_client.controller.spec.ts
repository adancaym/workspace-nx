import { Test, TestingModule } from '@nestjs/testing';
import { CustomerClientController } from './customer_client.controller';
import { CustomerClientService } from './customer_client.service';

describe('CustomerClientController', () => {
  let controller: CustomerClientController;
  const mockController = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerClientController],
      providers: [{
        provide: CustomerClientService,
        useValue: mockController,
      }],
    }).compile();

    controller = module.get<CustomerClientController>(CustomerClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
