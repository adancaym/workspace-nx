import { Module } from '@nestjs/common';
import { SenderModule } from './sender/sender.module';



@Module({
  imports: [SenderModule]
})
export class AppModule {}
