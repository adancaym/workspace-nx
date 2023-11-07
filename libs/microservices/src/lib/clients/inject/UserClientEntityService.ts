import { Inject } from '@nestjs/common';
import { UserEntityServiceName } from '../../constants/names/UserEntityServiceName';


export const UserClientEntityService = Inject(UserEntityServiceName);
