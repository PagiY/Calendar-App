import { Module } from '@nestjs/common';
import { EventController } from './events.controller';

@Module({
  providers: [],
  controllers: [EventController],
})
export class EventModule {}
