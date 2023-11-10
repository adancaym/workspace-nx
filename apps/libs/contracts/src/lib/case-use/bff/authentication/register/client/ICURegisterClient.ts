import { IRegisterClient, IReadClient } from "../../../../../contracts";

export interface ICURegisterClient {
  register(client: IRegisterClient): Promise<IReadClient>;
}
