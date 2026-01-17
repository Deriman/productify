import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env";

// Setear el schema y la url de la base de datos
export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL!,
  },
});