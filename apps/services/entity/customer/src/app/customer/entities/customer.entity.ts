import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CustomerClient } from "../../customer_client/entities/customer_client.entity";

@Entity('customer')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => CustomerClient, client => client.customer)
    clients: CustomerClient[];
}
