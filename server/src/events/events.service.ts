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

  async findAll() {
    /**
     * {} - returns all
     */
    return this.prisma.event.findMany({});
  }

  async findOne(id: string): Promise<Event | null> {
    /**
     * if you specify an object to 'where', it should be the type of the property you are filtering,
     * in this case it's the id so the id is of type string as per our schema, contrast that to the
     * event function above where we pass the whole event model, we use the PrismaClient
     * type, 'EventWhereUniqueInput'
     */
    return this.prisma.event.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, event: Prisma.EventUpdateInput): Promise<Event> {
    /**
     * where: { id } - find the event to update with id = id
     * data: event - update using this event input
     */
    return this.prisma.event.update({
      where: {
        id,
      },
      data: event,
    });
  }

  async createEvent(event: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data: event,
    });
  }

  async deleteEvent(id: string) {
    return this.prisma.event.delete({
      where: {
        id,
      },
    });
  }
}
