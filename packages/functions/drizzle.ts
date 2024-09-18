import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { Resource } from 'sst';


const turso = createClient({
  url: Resource.TursoDatabaseUrl.value,
  authToken: Resource.TursoAuthToken.value,
});

export const db = drizzle(turso);
