# معماری نسخه نهایی
Frontend: Next.js App Router + RTL
Backend: Route Handlers / Server Actions
DB: PostgreSQL + Prisma
Storage: S3-compatible
Search: PostgreSQL FTS، و در مقیاس بالا Meilisearch
Jobs: Cron + Queue
Auth: NextAuth + 2FA
Admin roles: SUPER_ADMIN, EDITOR, RELIGIOUS_REVIEWER, MEDIA_MANAGER

گردش محتوا:
Source -> Fetch -> License Check -> Normalize -> Draft -> Human Review -> Publish -> Schedule

برای احکام، AI نباید فتوا تولید کند؛ فقط در بانک پاسخ‌های تأییدشده و منابع رسمی جست‌وجو کند.
