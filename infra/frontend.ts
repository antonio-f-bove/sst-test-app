import { hono } from "./api"

export const angular = new sst.aws.StaticSite("Angular", {
  dev: {
    command: "ng serve",
    directory: '../packages/frontend/risky-frontend/'
  },
  build: {
    output: "dist/browser",
    command: "ng build --output-path dist"
  },
  environment: {
    API_URL: hono.url,
  },
})
