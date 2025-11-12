"use client";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function UniBuddy() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [pending, setPending] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{
    role: "assistant",
    content:
      "Hi! I’m UniBuddy. Ask me anything about degrees, universities, or study plans. I’ll answer quickly and simply."
  }]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = async () => {
    const text = q.trim();
    if (!text || pending) return;
    setMsgs((m) => [...m, { role: "user", content: text }]);
    setQ("");
    setPending(true);
    try {
      const r = await fetch("/api/degree-helper", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query: text })
      });
      const data = await r.json();
      const reply = r.ok ? (String(data?.text || "")) : (data?.error || `Error ${r.status}`);
      setMsgs((m) => [...m, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setMsgs((m) => [...m, { role: "assistant", content: "Sorry, I couldn’t reach the helper. Please try again." }]);
    } finally {
      setPending(false);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const css = `
  .ub-fab { position: fixed; right: 18px; bottom: 18px; width: 56px; height: 56px; border-radius: 999px; background:linear-gradient(135deg,#0ea5e9,#6366f1); color:#fff; display:grid; place-items:center; box-shadow:0 10px 24px rgba(0,0,0,.25); cursor:pointer; z-index:60; }
  .ub-fab:hover { filter:brightness(.95); }
  .ub-fab svg { width:24px; height:24px; }
  .ub-panel { position: fixed; right: 18px; bottom: 84px; width: min(92vw, 400px); background:#0f172a; color:#e5e7eb; border:1px solid rgba(255,255,255,.12); border-radius: 14px; box-shadow: 0 14px 36px rgba(0,0,0,.35); z-index:60; display:flex; flex-direction:column; overflow:hidden; }
  .ub-hd { display:flex; align-items:center; justify-content:space-between; gap:.5rem; padding:.65rem .85rem; background:rgba(255,255,255,.06); }
  .ub-ttl { font-weight:600; font-size:.95rem; }
  .ub-list { padding:.8rem; display:flex; flex-direction:column; gap:.5rem; max-height:320px; overflow:auto; }
  .ub-row { display:flex; gap:.5rem; }
  .ub-bot, .ub-user { max-width:85%; padding:.55rem .7rem; border-radius:12px; white-space:pre-wrap; }
  .ub-bot { background:#0b1325; border:1px solid rgba(255,255,255,.08); }
  .ub-user { margin-left:auto; background:#1d4ed8; color:#fff; }
  .ub-input { padding:.6rem .8rem; display:flex; gap:.5rem; border-top:1px solid rgba(255,255,255,.08); background:#0b1325; }
  .ub-ta { flex:1; resize:none; border-radius:10px; border:1px solid rgba(255,255,255,.12); background:#0f172a; color:#e5e7eb; padding:.6rem .7rem; font-size:.92rem; min-height:42px; max-height:120px; }
  .ub-btn { display:inline-flex; align-items:center; justify-content:center; border-radius:10px; background:#22c55e; color:#0b1325; padding:.5rem .9rem; font-size:.9rem; font-weight:700; }
  .ub-btn[disabled] { opacity:.6; cursor:not-allowed; }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {!open && (
        <button className="ub-fab" aria-label="Open UniBuddy" onClick={() => setOpen(true)}>
          {/* chat bubble icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 5V6a2 2 0 0 1 2-2Z"/>
          </svg>
        </button>
      )}
      {open && (
        <div className="ub-panel" role="dialog" aria-label="UniBuddy">
          <div className="ub-hd">
            <div className="ub-ttl">UniBuddy</div>
            <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>
          <div ref={listRef} className="ub-list">
            {msgs.map((m, i) => (
              <div key={i} className="ub-row">
                <div className={m.role === "assistant" ? "ub-bot" : "ub-user"}>{m.content}</div>
              </div>
            ))}
            {pending && (
              <div className="ub-row"><div className="ub-bot">Thinking…</div></div>
            )}
          </div>
          <div className="ub-input">
            <textarea
              className="ub-ta"
              placeholder="Type your question and press Enter… (Shift+Enter for new line)"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              onKeyDown={onKey}
            />
            <button className="ub-btn" onClick={send} disabled={pending || !q.trim()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
