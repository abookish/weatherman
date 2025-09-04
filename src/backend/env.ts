// env.ts
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config(); // loads .env into process.env

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  SENDER_EMAIL: z.string(),
  EMAIL_APP_PASS: z.string(),
  USER_TEST_NUMBER: z.string(),
  USER_TEST_NAME: z.string(),
});

export const env = envSchema.parse(process.env);
