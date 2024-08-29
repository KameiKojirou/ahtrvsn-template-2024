/* Hono Server is in lib/api/index.ts */
import app from "@/lib/api";
import type { APIRoute } from "astro";
const handler: APIRoute = ({ request }) => app.fetch(request);
export { handler as ALL };