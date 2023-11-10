import { ICreateClient } from "./i.create.client";

export type IRegisterClient = ICreateClient & {
  customer: number;
};
