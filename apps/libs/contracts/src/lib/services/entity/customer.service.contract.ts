import { ICreateCustomer, IReadCustomer, IUpdateCustomer } from '../../entities';
import { IServiceContract } from '../../core/service.contract';

export interface CustomerServiceContract
  extends IServiceContract<ICreateCustomer, IUpdateCustomer, IReadCustomer> {
  create(client: ICreateCustomer): Promise<IReadCustomer>;
  update(id: number, client: IUpdateCustomer): Promise<IReadCustomer>;
  findOne(id: number): Promise<IReadCustomer>;
  findAll(): Promise<IReadCustomer[]>;
  remove(id: number): void;
}
