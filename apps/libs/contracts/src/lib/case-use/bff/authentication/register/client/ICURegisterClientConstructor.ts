import { IRegisterClient } from '../../../../../contracts';

import {
  ClientServiceContract,
  CustomerServiceContract,
  CustomerClientServiceContract,
} from '../../../../entity';

export interface ICURegisterClientConstructor {
  clientDto: IRegisterClient;
  clientService: ClientServiceContract;
  customerService: CustomerServiceContract;
  customerClientService: CustomerClientServiceContract;
}
