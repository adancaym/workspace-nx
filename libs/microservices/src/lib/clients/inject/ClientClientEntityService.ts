import { Inject } from '@nestjs/common';
import { ClientEntityServiceName } from '../../constants/names/ClientEntityServiceName';


export const ClientClientEntityService = Inject(ClientEntityServiceName);
