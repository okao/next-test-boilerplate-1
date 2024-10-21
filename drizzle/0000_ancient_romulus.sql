CREATE TABLE IF NOT EXISTS "email_subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"created_at" timestamp (3) DEFAULT '2024-10-20T16:41:01.501Z',
	"updated_at" timestamp (3),
	"deleted_at" timestamp (3)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"created_at" timestamp (3) DEFAULT '2024-10-20T16:41:01.502Z',
	"updated_at" timestamp (3),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
