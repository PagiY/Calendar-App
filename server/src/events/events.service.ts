import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async event(event: Prisma.EventWhereUniqueInput): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: event,
    });
  }

  async createEvent(event: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data: event,
    });
  }
}
