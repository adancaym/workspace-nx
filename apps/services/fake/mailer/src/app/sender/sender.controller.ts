import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SenderService } from './sender.service';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';

@Controller()
export class SenderController {
  constructor(private readonly senderService: SenderService) {}

  @MessagePattern('createSender')
  create(@Payload() createSenderDto: CreateSenderDto) {
    return this.senderService.create(createSenderDto);
  }

  @MessagePattern('findAllSender')
  findAll() {
    return this.senderService.findAll();
  }

  @MessagePattern('findOneSender')
  findOne(@Payload() id: number) {
    return this.senderService.findOne(id);
  }

  @MessagePattern('updateSender')
  update(@Payload() updateSenderDto: UpdateSenderDto) {
    return this.senderService.update(updateSenderDto.id, updateSenderDto);
  }

  @MessagePattern('removeSender')
  remove(@Payload() id: number) {
    return this.senderService.remove(id);
  }
}
