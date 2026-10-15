'use client';

import { useEffect, useState } from 'react';

/** Server-renders the real value (crawlers see it), then counts up on the client. */
export default function Counter({ to, decimals = 0, delay = 500 }: { to: number; decimals?: number; delay?: number }) {
  const [v, setV] = useState(to);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setV(0);
    let raf = 0;
    const t = setTimeout(() => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, Math.max(0, (now - t0) / 1800));
        setV(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [to, delay]);
  return <span className="tabular-nums">{v.toFixed(decimals)}</span>;
}
