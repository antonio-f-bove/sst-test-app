import { hono } from "./api"

export const angular = new sst.aws.StaticSite("Angular", {
  dev: {
    command: "npm run start",
    directory: '/packages/frontend',
  },
  build: {
    output: "dist/browser",
    command: "ng build --output-path dist"
  },
  environment: {
    // "NG_APP_" prefix is mandatory
    NG_APP_API_URL: hono.url,
  },
});

