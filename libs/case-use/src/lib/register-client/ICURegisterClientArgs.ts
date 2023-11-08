import { ClientServiceContract, CustomerClientServiceContract, CustomerServiceContract, IRegisterClient } from '@workspace-nx/contracts';


export interface ICURegisterClientArgs {
  clientDto: IRegisterClient;
  clientService: ClientServiceContract;
  customerService: CustomerServiceContract;
  customerClientService: CustomerClientServiceContract
}
