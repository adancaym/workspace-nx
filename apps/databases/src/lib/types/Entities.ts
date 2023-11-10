import { MixedList, EntitySchema } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export type Entities = MixedList<string | Function | EntitySchema<any>>;
