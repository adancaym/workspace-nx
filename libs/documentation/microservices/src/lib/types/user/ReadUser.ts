import { ApiProperty } from "@nestjs/swagger";
import { IReadUser } from "@workspace-nx/models";

export class ReadUser implements IReadUser {

    @ApiProperty()
    id: number;
    
    @ApiProperty()
    email: string;

    constructor(data: IReadUser) {
        this.id = data.id;
        this.email = data.email;
    }
}
