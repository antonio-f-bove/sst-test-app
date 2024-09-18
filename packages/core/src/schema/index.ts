import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// export module Schema {

export const prompts = sqliteTable('prompts', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
});

export const ratings = sqliteTable('ratings', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  value: integer('value', { mode: 'number' }).notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
});

export const users = sqliteTable('users', {
  // id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  email: text('email').primaryKey(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at').default(sql`(CURRENT_TIMESTAMP)`),
});
// }
