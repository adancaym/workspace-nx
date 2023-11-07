import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerClient } from '../../customer_client/entities/customer_client.entity';
import { ICustomer } from '@workspace-nx/contracts';

@Entity('customer')
export class Customer implements ICustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => CustomerClient, (client) => client.customer)
  clients: CustomerClient[];
}
