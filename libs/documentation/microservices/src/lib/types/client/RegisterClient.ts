import { ApiProperty } from "@nestjs/swagger";
import { IRegisterClient } from "@workspace-nx/models";

export class RegisterClient implements IRegisterClient {
    @ApiProperty()
    name: string;

    @ApiProperty()
    customer: number;

    constructor(data: IRegisterClient) {
        this.name = data.name;
        this.customer = data.customer;
    }
}
