import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ICreateUser, IUpdateUser } from '@workspace-nx/models';


describe('UserController', () => {
  let userController: UserController;

  const mockController = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockController,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto: ICreateUser = {
        email: '',
        password: '',
    };
    userController.create(createUserDto);
    expect(mockController.create).toHaveBeenCalledWith(createUserDto);
  });

  it('should find all users', () => {
    userController.findAll();
    expect(mockController.findAll).toHaveBeenCalled();
  });

  it('should find a user by id', () => {
    const userId = 1;
    userController.findOne(userId);
    expect(mockController.findOne).toHaveBeenCalledWith(userId);
  });

  it('should update a user', () => {
    const updateUserDto: IUpdateUser = {
        id: 1,
        email: '',
        password: '',
    }; 
    userController.update(updateUserDto);
    expect(mockController.update).toHaveBeenCalledWith(1,updateUserDto);
  });

  it('should remove a user', () => {
    const userId = 1;
    userController.remove(userId);
    expect(mockController.remove).toHaveBeenCalledWith(userId);
  });
});
