import {
  ICreateClientUser,
  IReadClientUser,
  IUpdateClientUser,
} from '../contracts';
import { IServiceContract } from '../core/service.contract';

export interface ClientUserServiceContract
  extends IServiceContract<
    ICreateClientUser,
    IUpdateClientUser,
    IReadClientUser
  > {
  create(client: ICreateClientUser): Promise<IReadClientUser>;
  update(id: number, client: IUpdateClientUser): Promise<IReadClientUser>;
  findOne(id: number): Promise<IReadClientUser>;
  findAll(): Promise<IReadClientUser[]>;
  remove(id: number): void;
}
