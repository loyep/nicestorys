import { Hono } from "hono";

export function routes() {
  const router = new Hono();

  router.get("/api", (ctx) => {
    return ctx.json({
      fff: "fff",
    });
  })
  return router;
}
