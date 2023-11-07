import { DynamicModule } from '@nestjs/common';
import { connectDatabase } from './connectDatabase';
import { Entities } from './types/Entities';


export const databaseClient = (
  entities: Entities = [],
  host = 'database',
  schema = 'client'
): DynamicModule => connectDatabase({
  entities,
  host,
  schema,
  database: 'workspace-nx',
});
