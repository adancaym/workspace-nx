import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "../../client/entities/client.entity";

@Entity('client_user')
export class ClientUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @ManyToOne(() => Client, client => client.id)
    client: Client[];
}
