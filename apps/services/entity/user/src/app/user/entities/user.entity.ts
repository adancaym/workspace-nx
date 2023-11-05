import { IUser } from "@workspace-nx/models";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity implements IUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;
}
