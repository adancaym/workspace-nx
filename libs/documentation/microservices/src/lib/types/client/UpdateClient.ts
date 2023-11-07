import { ApiProperty } from "@nestjs/swagger";
import { IUpdateClient } from "@workspace-nx/models";

export class UpdateClient implements IUpdateClient {
    
    @ApiProperty()
    id?: number;

    @ApiProperty()
    name?: string;
  

    constructor(data: IUpdateClient) {
        this.id = data.id;
        this.name = data.name;
    }   
}