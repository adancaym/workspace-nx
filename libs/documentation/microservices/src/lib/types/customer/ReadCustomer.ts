import { ApiProperty } from "@nestjs/swagger";
import { IId, IReadCustomer } from "@workspace-nx/models";
import { Client } from "../client";

export class ReadCustomer implements IReadCustomer {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    clients?: Client[] | IId[];

    constructor(data: IReadCustomer) {
        this.id = data.id;
        this.name = data.name;
        this.clients = data.clients;
    }
    
}