import { ApiProperty } from "@nestjs/swagger";
import { ICreateCustomerClient, IId } from "@workspace-nx/models";
import { Customer } from "../customer/Customer";

export class CreateCustomerClient implements ICreateCustomerClient {

    @ApiProperty()
    clientId: number;
    @ApiProperty()
    customer?: IId | Customer;

    constructor(data: ICreateCustomerClient) {
        this.clientId = data.clientId;
        this.customer = data.customer;
    }

}