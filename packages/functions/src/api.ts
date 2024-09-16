// import { Resource } from "sst";
// import { Handler } from "aws-lambda";
// import { Example } from "@sst-test-app/core/example";
import { Hono } from 'hono';
import { handle } from "hono/aws-lambda";

const app = new Hono()
  .get("/", async (c) => {

    return c.text('Hello lambda!');
  });

export const handler = handle(app);
