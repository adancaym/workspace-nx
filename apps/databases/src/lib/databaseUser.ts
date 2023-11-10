import { DynamicModule } from '@nestjs/common';
import { connectDatabase } from './connectDatabase';
import { Entities } from './types/Entities';

export const databaseUser = (
  entities: Entities = [],
  host = 'database',
  schema = 'user'
): DynamicModule =>
  connectDatabase({
    entities,
    host,
    schema,
    database: 'workspace-nx',
  });
