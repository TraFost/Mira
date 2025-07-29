CREATE TABLE IF NOT EXISTS "users" (
	"wallet" text PRIMARY KEY NOT NULL,
	"connected_at" timestamp DEFAULT now(),
	"last_active_at" timestamp
);
