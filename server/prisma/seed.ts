import { PrismaClient } from '@prisma/client';
import { events } from './events';

const prisma = new PrismaClient();

async function main() {
  for (const e of events) {
    /**
     * Upsert is a command that allows you to update a record if it exists, or create it if it does not.
     */
    await prisma.event.upsert({
      where: e,
      update: {},
      create: e,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
