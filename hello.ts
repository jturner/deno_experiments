import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello deno!";
});

addEventListener("fetch", app.fetchEventHandler());
