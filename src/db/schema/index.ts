import { pgTable, serial, timestamp, varchar, uuid } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import bcrypt from "bcrypt";


export const emailSubscriptions = pgTable("email_subscriptions", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }),
  createdAt: timestamp("created_at", { mode: "date", precision: 3 }).default(
    new Date(),
  ),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date(),
  ),
  deleted_at: timestamp("deleted_at", { mode: "date", precision: 3 }),
});

export const users = pgTable("users", {
  // id: serial("id").primaryKey(),
  // email: varchar("email", { length: 256 }),

  //id as string uuid
  // id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  // email: varchar("email", { length: 256 }),
  // password: varchar("password", { length: 256 }),
  // firstName: varchar("first_name", { length: 256 }),
  // lastName: varchar("last_name", { length: 256 }),
  // createdAt: timestamp("created_at", { mode: "date", precision: 3 }).default(
  //   new Date(),
  // ),
  // updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
  //   () => new Date(),
  // ),

  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),
});

export type EmailSubscriptions = typeof emailSubscriptions.$inferSelect;
export type NewEmailSubscription = typeof emailSubscriptions.$inferInsert;
