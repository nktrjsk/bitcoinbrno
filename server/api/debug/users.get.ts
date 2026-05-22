import { db, schema } from '@nuxthub/db'

export default defineEventHandler(async () => {
  if (!import.meta.dev) throw createError({ statusCode: 404 })
  return db.select().from(schema.users).all()
})
