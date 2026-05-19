import { db } from '@nuxthub/db'
import { sql } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email: string = (body.email ?? '').trim().toLowerCase()
  const phone: string = (body.phone ?? '').trim()
  const prefLang: string = body.prefLang === 'en' ? 'en' : 'cs'

  if (!email && !phone) {
    throw createError({ statusCode: 400, message: 'Provide email or phone' })
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, message: 'Invalid email' })
  }

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS pizzaday_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      phone TEXT UNIQUE,
      pref_lang TEXT NOT NULL DEFAULT 'cs',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  await db.run(sql`
    INSERT INTO pizzaday_subscribers (email, phone, pref_lang)
    VALUES (${email || null}, ${phone || null}, ${prefLang})
    ON CONFLICT(email) DO UPDATE SET
      phone = excluded.phone,
      pref_lang = excluded.pref_lang,
      created_at = datetime('now')
    WHERE email IS NOT NULL
  `)

  return { ok: true }
})
