import { IReadClient, IRegisterClient } from '@workspace-nx/contracts';

export interface ICURegisterClient {
  register(client: IRegisterClient): Promise<IReadClient>;
}
