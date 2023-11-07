import { DynamicModule } from '@nestjs/common';
import { connectDatabase } from './connectDatabase';
import { Entities } from './types/Entities';


export const databaseCustomer = (
  entities: Entities = [],
  host = 'database',
  schema = 'customer'
): DynamicModule => connectDatabase({
  entities,
  host,
  schema,
  database: 'workspace-nx',
});
