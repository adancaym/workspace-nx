import { ICreateClientUser, IId } from "@workspace-nx/models";
import { Client } from "../client/Client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateClientUser implements ICreateClientUser{

    @ApiProperty()
    userId: number;

    @ApiProperty()
    client: IId | Client;

    constructor(data :ICreateClientUser) {
        this.userId = data.userId;
        this.client = data.client;
    }
}