import { DynamicModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MixedList, EntitySchema } from 'typeorm'

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export type Entities =MixedList< string | Function | EntitySchema<any>>

interface DatabaseOptions {
  entities: Entities
  host?: string
  schema?: string,
  database?: string,
}


const connectDatabase = (options: DatabaseOptions): DynamicModule => {
  const { entities, host, schema, database } = options
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
      synchronize: true
    }),
  })
}

export const databaseUser = (
  entities: Entities = [],
  host = 'database',
  schema = 'user',
): DynamicModule =>  connectDatabase({
  entities,
  host,
  schema,
  database: 'workspace-nx',
})

export const databaseClient = (
  entities: Entities = [],
  host = 'database',
  schema = 'client', 
): DynamicModule =>  connectDatabase({
  entities,
  host,
  schema,
  database: 'workspace-nx',
})

export const databaseCustomer = (
  entities: Entities = [],
  host = 'database',
  schema = 'customer',
): DynamicModule =>  connectDatabase({
  entities,
  host,
  schema,
  database: 'workspace-nx',
})

