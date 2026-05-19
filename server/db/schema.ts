import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const pizzadaySubscribers = sqliteTable('pizzaday_subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').unique(),
  phone: text('phone').unique(),
  prefLang: text('pref_lang').notNull().default('cs'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
})
