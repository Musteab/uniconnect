"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answerHtml: string;
  videoUrl?: string | null;
};

export default function AccessibleFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const headerRefs = useRef<HTMLButtonElement[]>([]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Normalize ids
  const data = useMemo(() => items.map((it) => ({ ...it, id: it.id || slugify(it.question) })), [items]);

  useEffect(() => {
    const hash = (typeof window !== 'undefined' && window.location.hash) || '';
    const idx = data.findIndex((it) => `#faq-${it.id}` === hash);
    if (idx >= 0) {
      setOpenIndex(idx);
      setFocusIndex(idx);
      setTimeout(() => headerRefs.current[idx]?.focus(), 0);
      scrollIntoView(idx);
    }
  }, [data]);

  function scrollIntoView(i: number) {
    headerRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function open(i: number) {
    // Pause any playing videos
    videoRefs.current.forEach((v) => { try { v?.pause(); } catch {} });
    setOpenIndex(i);
    if (typeof window !== 'undefined') {
      const id = data[i]?.id;
      if (id) history.replaceState(null, '', `#faq-${id}`);
    }
  }

  function onHeaderClick(i: number) {
    open(i === openIndex ? -1 : i);
    setFocusIndex(i);
  }

  function onPrevNext(delta: number) {
    const total = data.length;
    const next = (focusIndex + delta + total) % total;
    setFocusIndex(next);
    open(next);
    setTimeout(() => headerRefs.current[next]?.focus(), 0);
    scrollIntoView(next);
  }

  function onHeaderKey(e: React.KeyboardEvent, i: number) {
    const total = data.length;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onHeaderClick(i);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const n = Math.min(total - 1, i + 1);
      setFocusIndex(n);
      headerRefs.current[n]?.focus();
      scrollIntoView(n);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const p = Math.max(0, i - 1);
      setFocusIndex(p);
      headerRefs.current[p]?.focus();
      scrollIntoView(p);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocusIndex(0);
      headerRefs.current[0]?.focus();
      scrollIntoView(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      const last = total - 1;
      setFocusIndex(last);
      headerRefs.current[last]?.focus();
      scrollIntoView(last);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrevNext(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onPrevNext(1);
    }
  }

  return (
    <div>
      <div className="flex justify-end gap-2 mb-3">
        <button className="px-3 py-1 text-xs rounded-md border bg-light hover:bg-light/80" onClick={() => onPrevNext(-1)} aria-label="Previous question">← Prev</button>
        <button className="px-3 py-1 text-xs rounded-md border bg-light hover:bg-light/80" onClick={() => onPrevNext(1)} aria-label="Next question">Next →</button>
      </div>
      <div className="space-y-3">
        {data.map((it, i) => {
          const openNow = i === openIndex;
          const panelId = `faq-panel-${it.id}`;
          const btnId = `faq-header-${it.id}`;
          return (
            <div key={it.id} className="rounded-xl border border-white/10 overflow-hidden bg-light text-dark">
              <button
                ref={(el) => { if (el) headerRefs.current[i] = el; }}
                id={btnId}
                className="w-full text-left px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent flex items-center justify-between"
                aria-expanded={openNow}
                aria-controls={panelId}
                onClick={() => onHeaderClick(i)}
                onKeyDown={(e) => onHeaderKey(e, i)}
              >
                <span>{it.question}</span>
                <span className="text-xs text-dark/70">{openNow ? '−' : '+'}</span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="px-4 grid transition-all duration-300"
                style={{ gridTemplateRows: openNow ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="pb-4">
                    <div className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: it.answerHtml }} />
                    {it.videoUrl ? (
                      <video
                        ref={(el) => { if (el) videoRefs.current[i] = el; }}
                        src={it.videoUrl}
                        controls
                        preload="metadata"
                        className="mt-3 w-full max-w-xl rounded-md border"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

