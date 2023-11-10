import { IRegisterClient } from '../../../../../entities';
import {
  ClientServiceContract,
  CustomerServiceContract,
  CustomerClientServiceContract,
} from '../../../../../services';

export interface ICURegisterClientConstructor {
  clientDto: IRegisterClient;
  clientService: ClientServiceContract;
  customerService: CustomerServiceContract;
  customerClientService: CustomerClientServiceContract;
}
