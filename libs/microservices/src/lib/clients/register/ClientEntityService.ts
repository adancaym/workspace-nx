import { registerMicroservice } from '../../core/registerMicroservice';
import { ClientEntityServiceName } from '../../constants/names/ClientEntityServiceName';


export const ClientEntityService = registerMicroservice(
  ClientEntityServiceName
);
