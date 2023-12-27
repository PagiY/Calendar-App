import { Module } from '@nestjs/common';
import { EventController } from './events.controller';
import { EventService } from './events.service';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Module({
  providers: [EventService, PrismaService],
  controllers: [EventController],
  exports: [EventService],
})
export class EventModule {}
