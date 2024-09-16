// import { bucket } from "./storage";

export const hono = new sst.aws.Function("Hono", {
  url: true,
  // link: [bucket],
  handler: "packages/functions/src/api.handler"
});

