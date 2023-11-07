import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseOptions } from './types/DatabaseOptions';

export const connectDatabase = (options: DatabaseOptions): DynamicModule => {
  const { entities, host, schema, database } = options;
  return TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host,
      port: 5432,
      username: 'citizix_user',
      password: 'S3cret',
      database,
      schema,
      entities,
      synchronize: true,
    }),
  });
};
