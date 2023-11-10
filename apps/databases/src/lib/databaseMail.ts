import { DynamicModule } from '@nestjs/common';
import { connectDatabase } from './connectDatabase';
import { Entities } from './types/Entities';

export const databaseMail = (
  entities: Entities = [],
  host = 'database',
  schema = 'mail'
): DynamicModule =>
  connectDatabase({
    entities,
    host,
    schema,
    database: 'workspace-nx',
});