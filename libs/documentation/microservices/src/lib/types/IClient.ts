import { ApiProperty } from "@nestjs/swagger";
import { IRegisterClient, IReadClient } from "@workspace-nx/models";


export class ClientRegister implements IRegisterClient {
    @ApiProperty()
    name: string;

    @ApiProperty()
    customer: number;

    constructor(data: IRegisterClient) {
        this.name = data.name;
        this.customer = data.customer;
    }
}

export class ClientView implements IReadClient {
    @ApiProperty()
    name: string;

    @ApiProperty()
    id: number;

    constructor(data: IReadClient) {
        this.name = data.name;
        this.id = data.id;
    }
   
}