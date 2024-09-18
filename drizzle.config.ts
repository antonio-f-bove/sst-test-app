import { defineConfig } from 'drizzle-kit';
import { Resource } from 'sst';

export default defineConfig({
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: Resource.TursoDatabaseUrl.value,
    authToken: Resource.TursoAuthToken.value,
  },
  schema: './packages/core/src/schema/index.ts',
  out: './migrations',
});
