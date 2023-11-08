import { Inject } from '@nestjs/common';
import { CustomerEntityServiceName } from '../../constants/names/CustomerEntityServiceName';

export const CustomerClientEntityService = Inject(CustomerEntityServiceName);
