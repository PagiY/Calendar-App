import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { EventService } from './events.service';
import { Event } from '@prisma/client';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('event/:id')
  getEvent(@Param('id') id: string) {
    return this.eventService.event({ id });
  }

  @Post('event')
  createEvent(@Body() eventData: Event) {
    return this.eventService.createEvent(eventData);
  }
}
