'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window { __lenis?: Lenis | null }
}

/** One rAF loop for every scroll-linked effect on the page (parallax, clip reveals, scroll-expand video, horizontal gallery). */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduce ? null : new Lenis({ lerp: 0.085, smoothWheel: true });
    window.__lenis = lenis;

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('reveal-in'); io.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    if (!reduce) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
        el.classList.add('reveal-init');
        io.observe(el);
      });
    }

    const cl = (v: number) => Math.max(0, Math.min(1, v));
    const q = (s: string) => document.querySelector<HTMLElement>(s);
    const qa = (s: string) => document.querySelectorAll<HTMLElement>(s);

    const frame = () => {
      const y = window.scrollY, vh = window.innerHeight, vw = window.innerWidth;

      if (!reduce) {
        const hp = cl(y / vh);
        const hc = q('[data-herocopy]');
        if (hc) { hc.style.opacity = String(1 - hp * 1.3); hc.style.transform = `translate3d(0,${hp * 80}px,0)`; }
        const hf = q('[data-herofilm]');
        if (hf) hf.style.transform = `translate3d(0,${hp * vh * 0.35}px,0) scale(${1 + hp * 0.08})`;

        qa('[data-par]').forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < -50 || r.top > vh + 50) return;
          const c = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${c * Number(el.dataset.par)}px,0) scale(${el.dataset.scale || 1.15})`;
        });

        qa('[data-clip]').forEach((el) => {
          const r = el.getBoundingClientRect();
          const p = cl((vh - r.top) / (vh * 0.75));
          el.style.clipPath = `inset(${(1 - p) * 14}% ${(1 - p) * 10}% ${(1 - p) * 4}% ${(1 - p) * 10}%)`;
        });

        const ce = q('[data-ceil]');
        if (ce) {
          const r = ce.parentElement!.getBoundingClientRect();
          const p = cl((vh - r.top) / (vh + r.height));
          ce.style.transform = `translate3d(0,${(0.5 - p) * 80}px,0) scale(${0.62 + p * 0.55})`;
        }
      }

      const ex = q('[data-expand]');
      if (ex) {
        const r = ex.getBoundingClientRect();
        const p = cl(-r.top / Math.max(1, r.height - vh));
        const e = reduce ? 1 : 1 - Math.pow(1 - cl(p / 0.6), 3);
        const box = ex.querySelector<HTMLElement>('[data-expand-box]');
        const txt = ex.querySelector<HTMLElement>('[data-expand-txt]');
        const pre = ex.querySelector<HTMLElement>('[data-expand-pre]');
        const ix = (1 - e) * (vw < 960 ? 6 : 22), iy = (1 - e) * 16;
        if (box) {
          box.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${(1 - e) * 24}px)`;
          const inner = box.firstElementChild as HTMLElement | null;
          if (inner) inner.style.transform = `scale(${1.25 - e * 0.25})`;
        }
        if (pre) { pre.style.opacity = String(1 - cl(p / 0.3)); pre.style.transform = `translate3d(0,${-p * 120}px,0)`; }
        if (txt) { const t = reduce ? 1 : cl((p - 0.55) / 0.3); txt.style.opacity = String(t); txt.style.transform = `translate3d(0,${(1 - t) * 40}px,0)`; }
      }

      const hs = q('[data-hscroll]'), tr = q('[data-htrack]');
      if (hs && tr) {
        const r = hs.getBoundingClientRect();
        const p = cl(-r.top / Math.max(1, r.height - vh));
        tr.style.transform = `translate3d(${-p * Math.max(0, tr.scrollWidth - vw)}px,0,0)`;
        const pr = q('[data-hprog]');
        if (pr) pr.style.transform = `scaleX(${p})`;
      }
    };

    let raf = 0;
    const loop = (t: number) => { lenis?.raf(t); frame(); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(raf); io.disconnect(); lenis?.destroy(); window.__lenis = null; };
  }, []);

  return null;
}

export function scrollToHash(href: string) {
  const el = href === '#top' ? document.body : document.querySelector<HTMLElement>(href);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(href === '#top' ? 0 : el, { offset: -60, duration: 1.6 });
  else window.scrollTo({ top: href === '#top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
  history.replaceState(null, '', href === '#top' ? ' ' : href);
}
