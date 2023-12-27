import { PrismaService } from 'src/lib/prisma/prisma.service';
import { Event, Prisma } from '@prisma/client';

export class EventService {
  constructor(private prisma: PrismaService) {}

  async event(event: Prisma.EventWhereUniqueInput): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: event,
    });
  }
}
