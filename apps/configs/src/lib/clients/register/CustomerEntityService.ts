import { registerMicroservice } from '../../core/registerMicroservice';
import { CustomerEntityServiceName } from '../../constants/names/CustomerEntityServiceName';

export const CustomerEntityService = registerMicroservice(
  CustomerEntityServiceName
);
