'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { TOWERS } from '@/lib/content';

export default function Towers() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx)); }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  const t = TOWERS[active];

  return (
    <section id="towers" aria-labelledby="towers-title" className="relative bg-navy text-cream">
      <div className="px-site wrap pt-[clamp(80px,10vw,140px)]">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-8">
          <h2 id="towers-title" className="display max-w-[820px] text-[clamp(38px,5vw,76px)]">Four towers of structural brilliance, in sleek glass.</h2>
          <p className="max-w-[360px] text-[15px] font-light leading-[1.8] text-cream/75">Each tower carries its own name and character — and its own view of the city below.</p>
        </div>
      </div>

      <div className="px-site wrap grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="sticky top-0 hidden h-screen items-center lg:flex">
          <div className="relative h-[76vh] w-full overflow-hidden">
            {TOWERS.map((tw, k) => (
              <Image
                key={tw.name}
                src={tw.img}
                alt={`${tw.name} (${tw.tower}) at Skyline by Candeur, Narsingi`}
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover"
                style={{
                  objectPosition: tw.pos,
                  opacity: k === active ? 1 : 0,
                  transform: `scale(${k === active ? 1 : 1.08})`,
                  transition: 'opacity 1.1s ease, transform 2.4s cubic-bezier(.2,.7,.2,1)',
                }}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-navy/80 to-transparent px-7 py-6">
              <span className="font-serif text-[56px] leading-none text-gold">{String(active + 1).padStart(2, '0')}</span>
              <span className="label-xs">{t.tower} · {t.name}</span>
            </div>
          </div>
        </div>

        <div className="lg:pl-[clamp(32px,5vw,90px)]">
          {TOWERS.map((tw, k) => (
            <article
              key={tw.name}
              data-idx={k}
              ref={(el) => { refs.current[k] = el; }}
              className={`flex flex-col justify-center border-b border-gold/15 py-12 transition-opacity duration-500 lg:min-h-[86vh] ${k === active ? '' : 'lg:opacity-30'}`}
            >
              <div className="relative mb-7 aspect-[4/3] w-full overflow-hidden lg:hidden">
                <Image src={tw.img} alt={`${tw.name} tower`} fill sizes="100vw" className="object-cover" style={{ objectPosition: tw.pos }} />
              </div>
              <p className="text-[11px] uppercase tracking-[.34em] text-gold">{tw.tower}</p>
              <h3 className="mt-4 font-serif text-[clamp(48px,5.6vw,92px)] leading-none">{tw.name}</h3>
              <dl className="mt-7 flex flex-wrap gap-9">
                <div className="flex flex-col-reverse">
                  <dt className="label-xs mt-1.5 text-cream/60">Sq.Ft.</dt>
                  <dd className="font-serif text-[30px] text-gold">{tw.size}</dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="label-xs mt-1.5 text-cream/60">Facing</dt>
                  <dd className="font-serif text-[30px] text-gold">{tw.facing}</dd>
                </div>
              </dl>
              <p className="mt-6 max-w-[440px] text-[15.5px] font-light leading-[1.8] text-cream/75">{tw.copy}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="h-[clamp(60px,8vw,120px)]" />
    </section>
  );
}
