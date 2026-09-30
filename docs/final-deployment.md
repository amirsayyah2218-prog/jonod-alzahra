# چک‌لیست انتشار نهایی

1. روی سرور Node.js 20+ نصب باشد.
2. PostgreSQL بسازید و `DATABASE_URL` را در Secretها قرار دهید.
3. `ADMIN_PASSWORD` و `SESSION_SECRET` را خارج از Git نگه دارید؛ SESSION_SECRET حداقل ۳۲ کاراکتر تصادفی باشد.
4. `SITE_URL=https://jonod.alzahraa.313` تنظیم شود.
5. `CRON_SECRET` تنظیم و فقط توسط scheduler ارسال شود.
6. `npm install` و سپس `npm run db:migrate` اجرا شود.
7. `npm run db:seed` اجرا شود.
8. `npm run typecheck && npm run check:content && npm run build` اجرا شود.
9. برنامه با `npm run start` اجرا شود.
10. DNS دامنه به سرویس استقرار اشاره کند و HTTPS فعال باشد.
11. `/api/health` باید پاسخ `ok: true` بدهد.
12. Cron را به `/api/cron` وصل کنید و هدر `x-cron-secret` را فقط در scheduler تنظیم کنید.
13. قبل از فعال‌سازی واردسازی خودکار، مجوز بازنشر هر منبع بررسی شود.
14. پاسخ‌های فقهی فقط با مرجع، منبع، شماره مسئله/شناسه و تاریخ بررسی منتشر شوند.
15. متن قرآن، ادعیه، نهج‌البلاغه، صحیفه، مداحی و کتاب‌ها بر اساس وضعیت حقوق نشر و منبع معتبر وارد شوند.
