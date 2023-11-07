import { ApiProperty } from "@nestjs/swagger";
import {  IId, IRegisterCustomer } from "@workspace-nx/models";
import { Client } from "../client";

export class RegisterCustomer implements IRegisterCustomer {

    @ApiProperty()
    name: string;

    @ApiProperty()
    clients?: Client[] | IId[] | undefined;

  
    constructor(data: IRegisterCustomer) {
        this.name = data.name;
        this.clients = data.clients;
    }
}
