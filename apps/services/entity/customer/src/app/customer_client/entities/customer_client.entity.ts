import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../../customer/entities/customer.entity";

@Entity('customer_client')
export class CustomerClient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clientId: number;

    @ManyToOne(() => Customer, customer => customer.clients)
    customer: Customer;
}
