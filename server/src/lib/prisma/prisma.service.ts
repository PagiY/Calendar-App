import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * This allows as to inject PrismaService anywhere in our app and access all of the types that
 * PrismaClient generated for us based of our Prisma Schema.
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * This allows us to connect to our database on startup
   */
  async onModuleInit() {
    await this.$connect();
  }
}
