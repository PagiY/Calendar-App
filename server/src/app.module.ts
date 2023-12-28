import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './events/events.module';
import { PrismaModule } from './lib/prisma/prisma.module';

/**
 * imports:
 * - EventModule - operations on events
 * - PrismaModule - global scoped module imported by App (which is the core) Module
 */
@Module({
  imports: [EventModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
