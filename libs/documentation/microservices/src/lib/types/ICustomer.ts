import { ApiProperty } from "@nestjs/swagger";



export interface ICustomer {
    name: string;
}


export class CustomerRegister implements ICustomer {
    @ApiProperty()
    name: string;

    constructor(data: ICustomer) {
        this.name = data.name;
    }
}
