'use client';

import { scrollToHash } from './ScrollEffects';

export default function NavLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className} onClick={(e) => { e.preventDefault(); scrollToHash(href); }}>
      {children}
    </a>
  );
}
