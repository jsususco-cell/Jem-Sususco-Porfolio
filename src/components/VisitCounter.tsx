"use client";

import { useEffect, useState } from "react";
import { Eye } from "@/components/icons";

/**
 * Owner-only visit indicator.
 *
 * Every visitor is counted (a hit is sent once per browser session), but the
 * pill only renders for the owner. Unlock on your own devices by visiting:
 *     https://<your-site>/?owner=jsususco2026   (remembered on that device)
 * Hide again with:  ?owner=off
 *
 * Count is stored by the free Abacus hit-counter service (no backend needed).
 */
const OWNER_UNLOCK = "jsususco2026";
const NS = "jem-sususco-portfolio";
const KEY = "visits";
const BASE = "https://abacus.jasoncameron.dev";

export default function VisitCounter() {
  const [isOwner, setIsOwner] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Owner gate (persisted per device)
    let owner = false;
    try {
      const q = new URLSearchParams(window.location.search).get("owner");
      if (q === OWNER_UNLOCK) localStorage.setItem("pf_owner", "1");
      else if (q === "off") localStorage.removeItem("pf_owner");
      owner = localStorage.getItem("pf_owner") === "1";
    } catch {}
    setIsOwner(owner);

    // Count every visitor once per session; otherwise just read the total.
    let counted = false;
    try {
      counted = sessionStorage.getItem("pf_counted") === "1";
      if (!counted) sessionStorage.setItem("pf_counted", "1");
    } catch {}

    const url = counted ? `${BASE}/get/${NS}/${KEY}` : `${BASE}/hit/${NS}/${KEY}`;
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.value === "number") setCount(d.value);
      })
      .catch(() => {});
  }, []);

  if (!isOwner || count === null) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 lg:bottom-6 lg:right-6">
      <div className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-cream shadow-pill">
        <Eye width={16} height={16} className="text-brand" />
        <span className="text-sm font-bold tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="text-xs text-cream/70">visits</span>
      </div>
      <span className="mt-1 block text-center text-[10px] text-muted">
        only you can see this
      </span>
    </div>
  );
}
