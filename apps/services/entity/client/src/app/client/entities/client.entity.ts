import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClientUser } from '../../client_user/entities/client_user.entity';
import { IClient } from '@workspace-nx/contracts';

@Entity('client')
export class Client implements IClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ClientUser, (client) => client.id)
  users: ClientUser[];
}
