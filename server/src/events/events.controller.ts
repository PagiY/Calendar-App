import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './events.service';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('event/:id')
  getEvent(@Param('id') id: string) {
    return this.eventService.event({ id });
  }
}
