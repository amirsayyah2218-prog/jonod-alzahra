# V5 Data Integration

## Quran
Server-side routes are provided for Quran Foundation Content API chapters and verses. Keep `QF_CLIENT_ID` and `QF_CLIENT_SECRET` server-only.

## Islamic texts
`IslamicText` is the local table for Nahj al-Balagha and Sahifa Sajjadiya. Public pages read from this table and provide search. Import only text/translations the project is permitted to publish.

## Fiqh
`FiqhAnswer` is source-first: every answer should carry marja, source URL and verification metadata. Do not generate a fatwa as if it were an official answer.
