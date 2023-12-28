import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { EventService } from './events.service';
import { Prisma } from '@prisma/client';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('event/:id')
  getEvent(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @Get('event')
  getEvents() {
    return this.eventService.findAll();
  }

  @Patch('event/:id')
  updateEvent(
    @Param('id') id: string,
    @Body() eventData: Prisma.EventUpdateInput,
  ) {
    return this.eventService.update(id, eventData);
  }

  @Post('event')
  createEvent(@Body() eventData: Prisma.EventCreateInput) {
    return this.eventService.createEvent(eventData);
  }

  @Delete('event/:id')
  deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }
}
