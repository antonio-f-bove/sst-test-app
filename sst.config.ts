/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-test-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    const api = await import("./infra/api");
    const frontend = await import('./infra/frontend');

    return {
      api: api.hono.url,
      frontend: frontend.angular.url,
    };
  },
});
