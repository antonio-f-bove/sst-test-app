import { Hono } from 'hono';
import { handle } from "hono/aws-lambda";
import { prompts } from '@sst-test-app/core/schema';
import { db } from '../drizzle'

const app = new Hono()
  .get("/", async (c) => {

    return c.text('Hello lambda!');
  })
  .get("/prompts", async (c) => {
    const data = await db.select().from(prompts).all();

    return c.json({
      ok: true,
      data
    });
  });

export const handler = handle(app);
