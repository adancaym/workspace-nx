import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../../customer/entities/customer.entity";
import { ICustomerClient } from "@workspace-nx/models";

@Entity('customer_client')
export class CustomerClient implements ICustomerClient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clientId: number;

    @ManyToOne(() => Customer, customer => customer.clients)
    customer: Customer;
}
