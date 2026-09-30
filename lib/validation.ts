import { z } from 'zod';

export const contentSchema = z.object({
  id: z.string().cuid().optional(),
  title: z.string().trim().min(2).max(200),
  slug: z.string().trim().regex(/^[a-z0-9-]+$/).max(160),
  type: z.enum(['ARTICLE','LESSON','STORY','BOOK','ANIMATION','MARTYR','DAILY','MADAHI','MADAHI_TEXT','DUA','ZIYARAT','QURAN','FIQH','NAHJ','SAHIFA','EVENT','ACTIVITY']),
  excerpt: z.string().max(5000).nullable().optional(),
  body: z.string().max(200000).nullable().optional(),
  status: z.enum(['DRAFT','PUBLISHED','ARCHIVED']).default('DRAFT'),
  sourceUrl: z.preprocess((v) => v === '' ? null : v, z.string().url().nullable().optional()),
  license: z.string().max(500).nullable().optional(),
  publishedAt: z.string().datetime().nullable().optional(),
});

export const loginSchema = z.object({ password: z.string().min(1).max(256) });
