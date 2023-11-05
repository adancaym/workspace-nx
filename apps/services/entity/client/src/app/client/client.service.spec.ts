import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

describe('ClientService', () => {
  let clientService: ClientService;

  const mockRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    create: (element) => element,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: getRepositoryToken(Client),
          useValue: mockRepository,
        },
      ],
    }).compile();

    clientService = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(clientService).toBeDefined();
  });

  it('should create a client', () => {
    const createUserDto: CreateClientDto = {
        name: '',
    }; 
    clientService.create(createUserDto);

    expect(mockRepository.save).toHaveBeenCalledWith(createUserDto);
  });

  it('should find all clients', () => {
    clientService.findAll();
    expect(mockRepository.find).toHaveBeenCalled();
  });

  it('should find a client by id', () => {
    const clientId = 1;
    clientService.findOne(clientId);
    expect(mockRepository.findOne).toHaveBeenCalledWith(
        { where: { id: clientId } },
    );
  });

  it('should update a client', () => {
    const clientId = 1; // Provide a test user ID
    const updateUserDto: UpdateClientDto = {
        id: 1,
        name: '',
    }; // Provide test data
    clientService.update(clientId, updateUserDto);

    // You can assert that the update method was called on the mock repository
    expect(mockRepository.update).toHaveBeenCalledWith(clientId, updateUserDto);
  });

  it('should remove a client', () => {
    const clientId = 1; 
    clientService.remove(clientId);
    expect(mockRepository.delete).toHaveBeenCalledWith(clientId);
  });
});
