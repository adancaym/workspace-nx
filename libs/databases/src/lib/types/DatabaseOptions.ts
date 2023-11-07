import { Entities } from './Entities';


export interface DatabaseOptions {
  entities: Entities;
  host?: string;
  schema?: string;
  database?: string;
}
