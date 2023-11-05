import { ApiProperty } from "@nestjs/swagger";
import { ICreateUser } from "@workspace-nx/models";

export class UserRegister implements ICreateUser {

    @ApiProperty()
    email: string;
    
    @ApiProperty()
    password: string;
    
    constructor(data: ICreateUser) {
        this.email = data.email;
        this.password = data.password;
    }
}



