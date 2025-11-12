export interface Env {
  AI: any;
}

// Default model (swap at deploy time if needed)
const MODEL_DEFAULT = "@cf/meta/llama-3.1-8b-instruct";
const SYS_PROMPT = "Answer the user's question directly in plain language. Be brief (<=80 words). Don't ask clarifying questions unless absolutely necessary. If it's about degrees or universities, give 1-2 concrete options with a one-line reason and a simple next step. Avoid extra fluff. Make sure to keep prompting to reach out to one of our agents so they can elaborate. Don't push extra if you answer stop it there.";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const url = new URL(request.url);
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405, headers: { "content-type": "application/json" } });
      }
      // Accept both / and /api/degree-helper (and ignore any trailing slash)
      const path = url.pathname.replace(/\/$/, "");
      const okPaths = new Set(["", "/api/degree-helper"]);
      if (!okPaths.has(path)) {
        return new Response(JSON.stringify({ error: "Not Found" }), { status: 404, headers: { "content-type": "application/json" } });
      }

      const body = await request.json().catch(() => ({}));
      const query = (body?.query ?? "").toString().slice(0, 4000);
      const model = (body?.model ?? MODEL_DEFAULT).toString();
      if (!query) {
        return new Response(JSON.stringify({ error: "Missing 'query'" }), { status: 400, headers: { "content-type": "application/json" } });
      }

      const messages = [
        { role: "system", content: SYS_PROMPT },
        { role: "user", content: query }
      ];

      const resp = await env.AI.run(model, { messages, temperature: 0.3, max_tokens: 180 });
      const text = (resp?.response ?? "").toString();
      return new Response(JSON.stringify({ text }), { status: 200, headers: { "content-type": "application/json" } });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: "Internal Error", detail: err?.message ?? String(err) }), { status: 500, headers: { "content-type": "application/json" } });
    }
  },
};
