import { TursoAuthToken, TursoDatabaseUrl } from "./storage";

export const hono = new sst.aws.Function("Hono", {
  url: true,
  link: [TursoAuthToken, TursoDatabaseUrl],
  handler: "packages/functions/src/api.handler"
});

