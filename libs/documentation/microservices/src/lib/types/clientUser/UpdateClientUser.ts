import { IId, IUpdateClientUser } from "@workspace-nx/models";
import { Client } from "../client/Client";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateClientUser implements IUpdateClientUser{
    @ApiProperty()
    id: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    client: Client | IId;

    constructor(data: UpdateClientUser) {
        this.id = data.id;
        this.userId = data.userId;
        this.client = data.client;
    }
}