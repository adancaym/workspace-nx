import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UserService', () => {
  let userService: UserService;

  const mockUserRepository = {
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
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto: CreateUserDto = {
        email: '',
        password: '',
    }; 
    userService.create(createUserDto);

    expect(mockUserRepository.save).toHaveBeenCalledWith(createUserDto);
  });

  it('should find all users', () => {
    userService.findAll();

    expect(mockUserRepository.find).toHaveBeenCalled();
  });

  it('should find a user by id', () => {
    const userId = 1;
    userService.findOne(userId);
    expect(mockUserRepository.findOne).toHaveBeenCalledWith(
        { where: { id: userId } },
    );
  });

  it('should update a user', () => {
    const userId = 1; // Provide a test user ID
    const updateUserDto: UpdateUserDto = {
        id: 1,
        email: '',
        password: '',
    }; // Provide test data
    userService.update(userId, updateUserDto);

    // You can assert that the update method was called on the mock repository
    expect(mockUserRepository.update).toHaveBeenCalledWith(userId, updateUserDto);
  });

  it('should remove a user', () => {
    const userId = 1; 
    userService.remove(userId);

    expect(mockUserRepository.delete).toHaveBeenCalledWith(userId);
  });
});
