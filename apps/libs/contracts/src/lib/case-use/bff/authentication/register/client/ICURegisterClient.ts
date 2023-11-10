import { IRegisterClient, IReadClient } from "../../../../../entities";

export interface ICURegisterClient {
  register(client: IRegisterClient): Promise<IReadClient>;
}
