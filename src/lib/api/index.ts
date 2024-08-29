import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => c.json("Hello, World!"));

export default app;
