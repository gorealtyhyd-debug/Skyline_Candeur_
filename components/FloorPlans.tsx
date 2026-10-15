'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PLANS } from '@/lib/content';
import { EnquireButton } from './EnquiryProvider';

export default function FloorPlans() {
  const [sel, setSel] = useState(0);
  const plan = PLANS[sel];

  return (
    <section id="plans" aria-labelledby="plans-title" className="px-site py-section bg-navy text-cream">
      <div className="wrap grid grid-cols-1 items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
        <div>
          <p className="eyebrow">Floor plans</p>
          <h2 id="plans-title" className="display mt-[18px] text-[clamp(38px,4.6vw,70px)]">Choose your altitude.</h2>

          <div role="tablist" aria-label="Residence types" className="mt-11 flex flex-col border-t border-gold/20">
            {PLANS.map((p, k) => (
              <button
                key={p.name}
                role="tab"
                id={`plan-tab-${k}`}
                aria-selected={k === sel}
                aria-controls="plan-panel"
                onClick={() => setSel(k)}
                className={`grid grid-cols-[28px_1fr_auto] items-center gap-[22px] border-b border-gold/20 py-6 text-left transition-opacity duration-300 ${k === sel ? 'opacity-100' : 'opacity-45 hover:opacity-75'}`}
              >
                <span className="font-serif text-lg text-gold">0{k + 1}</span>
                <span>
                  <span className="label-xs block text-cream/60">{p.tab}</span>
                  <span className="mt-1.5 block font-serif text-[clamp(24px,2.2vw,32px)]">{p.name}</span>
                </span>
                <span aria-hidden className={`h-2.5 w-2.5 rotate-45 border border-gold ${k === sel ? 'bg-gold' : ''}`} />
              </button>
            ))}
          </div>

          <dl className="mt-10 flex flex-wrap gap-10">
            <div className="flex flex-col-reverse">
              <dt className="label-xs mt-2.5 text-cream/60">Sq.Ft.</dt>
              <dd className="font-serif text-[40px] leading-none text-gold">{plan.size}</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="label-xs mt-2.5 text-cream/60">Facing</dt>
              <dd className="font-serif text-[40px] leading-none text-gold">{plan.facing}</dd>
            </div>
          </dl>
          <EnquireButton className="btn mt-11 !rounded-none border border-gold text-gold hover:bg-gold hover:text-navy">Request detailed plans</EnquireButton>
        </div>

        <div
          id="plan-panel"
          role="tabpanel"
          aria-labelledby={`plan-tab-${sel}`}
          className={`grid min-h-[520px] items-center gap-5 bg-panel p-[clamp(20px,3vw,40px)] ${plan.imgs.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
        >
          {plan.imgs.map((im) => (
            <Image
              key={im.src}
              src={im.src}
              alt={`${plan.name} floor plan — ${plan.size} sq.ft., ${plan.facing} facing`}
              width={im.w}
              height={im.h}
              sizes="(min-width:1024px) 45vw, 100vw"
              className="mx-auto h-auto max-h-[78vh] w-full object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
