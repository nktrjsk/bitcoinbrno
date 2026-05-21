import { db, schema } from '@nuxthub/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email: string = (body.email ?? '').trim().toLowerCase()
  const phone: string = (body.phone ?? '').trim()
  const prefLang: 'cs' | 'en' = body.prefLang === 'en' ? 'en' : 'cs'

  if (!email && !phone) {
    throw createError({ statusCode: 400, message: 'Provide email or phone' })
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, message: 'Invalid email' })
  }

  await db
    .insert(schema.users)
    .values({ email: email || null, phone: phone || null, prefLang })
    .onConflictDoUpdate({
      target: email ? schema.users.email : schema.users.phone,
      set: {
        phone: phone || null,
        prefLang,
      },
    })

  return { ok: true }
})
