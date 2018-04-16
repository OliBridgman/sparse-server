CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "events" (
  "id" serial PRIMARY KEY NOT NULL,
  "cid" uuid NOT NULL,
  "type" text NOT NULL,
  "payload" jsonb NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT statement_timestamp()
);