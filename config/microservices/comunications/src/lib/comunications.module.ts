import { Module, Global } from '@nestjs/common';
import { ComunicationsService } from './comunications/comunications.service';

@Global()
@Module({
  controllers: [],
  providers: [ComunicationsService],
  exports: [],
})
export class ComunicationsModule {}
