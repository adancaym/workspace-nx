import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "../../client/entities/client.entity";
import { IClientUser } from "@workspace-nx/models";

@Entity('client_user')
export class ClientUser implements IClientUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @ManyToOne(() => Client, client => client.id)
    client: Client
}
