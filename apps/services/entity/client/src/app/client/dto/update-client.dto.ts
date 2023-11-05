import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IUpdateClient } from "@workspace-nx/models";

export class UpdateClientDto extends PartialType(CreateClientDto) implements IUpdateClient {
  id: number;
}
