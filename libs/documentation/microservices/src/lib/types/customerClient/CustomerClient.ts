import { ApiProperty } from "@nestjs/swagger";
import { ICustomer, ICustomerClient, IId } from "@workspace-nx/models";

export class CustomerClient implements ICustomerClient {
    @ApiProperty()
    id: number;

    @ApiProperty()
    clientId: number;

    @ApiProperty()
    customer?: IId | ICustomer;

    constructor(data: ICustomerClient) {
        this.id = data.id;
        this.clientId = data.clientId;
        this.customer = data.customer;
    }
    
}