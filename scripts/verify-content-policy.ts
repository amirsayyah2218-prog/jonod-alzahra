import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function main() {
  const unapproved = await db.content.findMany({
    where: { status: 'PUBLISHED', source: { allowed: false } },
    select: { id: true, title: true, slug: true },
  });
  if (unapproved.length) {
    console.error(`Found ${unapproved.length} published items whose source is not approved.`);
    for (const item of unapproved) console.error(`${item.id} | ${item.slug} | ${item.title}`);
    process.exitCode = 1;
    return;
  }
  console.log('Content policy check passed.');
}
main().finally(() => db.$disconnect());
