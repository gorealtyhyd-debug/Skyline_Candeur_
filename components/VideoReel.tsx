'use client';

import { useEffect, useRef, useState } from 'react';

export type Clip = { src: string; poster: string; kicker?: string; cap?: string };

type Props = {
  clips: Clip[];
  label: string;
  chrome?: boolean;
  title?: string;
  overlay?: string | false;
  priority?: boolean;
};

/** Sequential, muted, autoplaying clips with crossfades. Pauses off-screen; shows the poster when motion is reduced. */
export default function VideoReel({ clips, label, chrome, title, overlay, priority }: Props) {
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(false);
  const [reduce, setReduce] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const bar = useRef<HTMLDivElement>(null);
  const n = clips.length;

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    vids.current.forEach((v, k) => {
      if (!v) return;
      if (k === i && vis && !reduce) {
        if (v.ended) v.currentTime = 0;
        v.play().catch(() => {});
      } else v.pause();
    });
  }, [i, vis, reduce]);

  useEffect(() => {
    if (!chrome) return;
    let raf = 0;
    const tick = () => {
      const v = vids.current[i];
      if (bar.current && v && v.duration) bar.current.style.transform = `scaleX(${Math.min(1, v.currentTime / v.duration)})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [i, chrome]);

  const next = () => setI((k) => (k + 1) % n);

  return (
    <div ref={wrap} role="img" aria-label={label} className="absolute inset-0 overflow-hidden bg-navy">
      {clips.map((c, k) => (
        <video
          key={c.src}
          ref={(el) => { vids.current[k] = el; }}
          src={c.src}
          poster={c.poster}
          muted
          playsInline
          preload={k === 0 && priority ? 'auto' : 'metadata'}
          loop={n === 1}
          onEnded={n > 1 && k === i ? next : undefined}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: k === i ? 1 : 0 }}
        />
      ))}

      {overlay !== false && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: overlay || 'linear-gradient(180deg,rgba(24,35,64,.35) 0%,rgba(24,35,64,0) 30%,rgba(24,35,64,0) 60%,rgba(24,35,64,.75) 100%)' }}
        />
      )}

      {chrome && (
        <>
          <div className="absolute left-[clamp(18px,3vw,36px)] top-[22px] flex items-center gap-3 text-[10.5px] uppercase tracking-[.32em] text-gold">
            <span className="h-[7px] w-[7px] rounded-full bg-gold shadow-[0_0_0_4px_rgba(226,205,143,.2)]" />
            {title}
          </div>
          <div key={`cap-${i}`} className="anim-cap absolute bottom-[58px] left-[clamp(18px,3vw,36px)] right-[clamp(18px,3vw,36px)]">
            <p className="text-[10.5px] uppercase tracking-[.32em] text-gold">{String(i + 1).padStart(2, '0')} — {clips[i].kicker}</p>
            <p className="mt-2.5 max-w-[760px] font-serif text-[clamp(24px,2.8vw,42px)] leading-[1.08] text-cream">{clips[i].cap}</p>
          </div>
          <div className="absolute bottom-[18px] left-[clamp(18px,3vw,36px)] right-[clamp(18px,3vw,36px)] flex gap-2">
            {clips.map((c, k) => (
              <button key={c.src} type="button" onClick={() => setI(k)} aria-label={`Play: ${c.kicker}`} className="flex-1 cursor-pointer py-2.5">
                <span className="block h-0.5 overflow-hidden bg-cream/25">
                  <span
                    ref={k === i ? bar : undefined}
                    className="block h-full origin-left bg-gold"
                    style={{ transform: k < i ? 'scaleX(1)' : 'scaleX(0)' }}
                  />
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
