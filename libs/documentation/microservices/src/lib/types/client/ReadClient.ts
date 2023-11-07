import { ApiProperty } from "@nestjs/swagger";
import { IReadClient } from "@workspace-nx/models";



export class ReadClient implements IReadClient {
    @ApiProperty()
    name: string;

    @ApiProperty()
    id: number;

    constructor(data: IReadClient) {
        this.name = data.name;
        this.id = data.id;
    }

}
