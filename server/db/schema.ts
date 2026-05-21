import { sqliteTable, integer, text, unique } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').unique(),
  phone: text('phone').unique(),
  prefLang: text('pref_lang').notNull().default('cs'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
})

export const userSubscriptions = sqliteTable('user_subscriptions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  category: text('category').notNull(),
  community: text('community').notNull(),
}, (t) => [
  unique().on(t.userId, t.category, t.community),
])
