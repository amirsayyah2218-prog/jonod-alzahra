# V4 — Data and source layer

## What is now connected
- Official-source registry is stored in PostgreSQL.
- `/sources` exposes approved sources for visitors.
- `/api/sources` exposes approved sources for the UI.
- Seed registers the official websites used for fiqh verification.
- The Eitaa channel remains `allowed=false` until republication permission and an official ingestion method are verified.
- `npm run check:content` prevents publishing content whose source is explicitly unapproved.

## Fiqh import policy
Do not generate a fatwa with AI. Import only a source-backed answer, retain the exact source URL, marja, issue number when available, verification date, and reviewer status.

The Sistani site currently exposes both a Q&A index and official fatwa books; the current "Comprehensive Practical Laws" is listed as a 1403 edition. The site itself also advises users to review existing Q&A before submitting a new question.

## Next data adapters
1. Fiqh adapters per official domain, producing review records rather than immediate publication.
2. Calendar adapter with Jalali/Hijri/Gregorian fields and source attribution.
3. Prayer-time adapter by city/date, storing the calculation method and provider.
4. Quran/dua/Nahj/Sahifa imports from a verified/licensed corpus.
5. Media ingestion queue for manually approved Eitaa content.
