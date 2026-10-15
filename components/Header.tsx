'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/content';
import { useEnquiry } from './EnquiryProvider';
import { scrollToHash } from './ScrollEffects';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { open, isOpen } = useEnquiry();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => { e.preventDefault(); scrollToHash(href); };

  return (
    <>
      <header
        className={`px-site fixed inset-x-0 top-0 z-50 flex h-[84px] items-center justify-between gap-6 border-b transition-[background-color,border-color] duration-500 ${
          scrolled || isOpen ? 'border-gold/15 bg-navy/90 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" onClick={(e) => go(e, '#top')} aria-label="Skyline by Candeur — home" className="shrink-0">
          <Image src="/assets/skyline-logo.png" alt="Skyline by Candeur" width={180} height={80} priority className="h-10 w-auto" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-[clamp(18px,2.4vw,36px)] lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={(e) => go(e, n.href)} className="text-[11.5px] uppercase tracking-[.24em] !text-cream/80 hover:!text-gold">
              {n.label}
            </a>
          ))}
        </nav>
        <button type="button" onClick={open} className="btn-gold !rounded-none !px-6 !pb-[13px] !pt-[15px]">
          Enquire now
        </button>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-[45] border-t border-gold/30 bg-navy lg:hidden">
        <button type="button" onClick={open} className="min-h-14 w-full bg-gold text-[11.5px] font-semibold uppercase tracking-[.24em] text-navy">
          Enquire now
        </button>
      </div>
    </>
  );
}
