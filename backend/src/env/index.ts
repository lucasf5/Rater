import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  HOST: z.coerce.string().default("0.0.0.0"),
  NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev"),
  JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error({
    message: "Environment validation error 🚨",
    errors: _env.error.format(),
  });
  process.exit(1);
}

export const env = _env.data;
