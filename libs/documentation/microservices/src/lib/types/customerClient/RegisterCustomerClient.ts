import { IId, IRegisterCustomerClient } from "@workspace-nx/models";
import { Customer } from "../customer/Customer";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterCustomerClient implements IRegisterCustomerClient  {
    @ApiProperty()
    id: number;

    @ApiProperty()
    clientId: number;

    @ApiProperty()
    customer?: IId | Customer;


    constructor(data: IRegisterCustomerClient) {
        this.id = data.id;
        this.clientId = data.clientId;
        this.customer = data.customer;
    }

}