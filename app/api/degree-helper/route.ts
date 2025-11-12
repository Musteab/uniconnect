export async function POST(req: Request) {
  try {
    const { query, model } = await req.json();
    if (!query) return Response.json({ error: "Missing 'query'" }, { status: 400 });
    let base = (process.env.CF_WORKER_URL || "").trim();
    if (!base) return Response.json({ error: "CF_WORKER_URL not configured" }, { status: 503 });
    if (!/^https?:\/\//i.test(base)) base = `https://${base}`;
    const endpoint = new URL("/api/degree-helper", base).toString();
    const payload = { query, model } as any;

    let r: Response;
    try {
      r = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      // Fallback: try root path if worker doesn't mount at /api/degree-helper
      const root = new URL("/", base).toString();
      try {
        r = await fetch(root, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (e2) {
        return Response.json({ error: "fetch failed", detail: String(e2) }, { status: 502 });
      }
    }

    let data: any = null;
    try { data = await r.json(); } catch { data = {}; }
    if (!r.ok) return Response.json({ error: data?.error ?? `Upstream ${r.status}` }, { status: r.status });
    return Response.json({ text: data?.text ?? "" });
  } catch (e: any) {
    return Response.json({ error: e?.message ?? "Internal error" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}
