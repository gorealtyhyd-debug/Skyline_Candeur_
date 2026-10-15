'use client';

import Image from 'next/image';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { BUDGET_OPTIONS, UNIT_OPTIONS } from '@/lib/content';
import { SITE } from '@/lib/site';

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const EnquiryCtx = createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });
export const useEnquiry = () => useContext(EnquiryCtx);

export default function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (isOpen) window.__lenis?.stop(); else window.__lenis?.start();
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <EnquiryCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && <EnquiryModal onClose={close} />}
    </EnquiryCtx.Provider>
  );
}

export function EnquireButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open } = useEnquiry();
  return <button type="button" onClick={open} className={className}>{children}</button>;
}

/** Sends the lead straight from the browser to Privyr's generic webhook (no server code). */
async function sendLead(d: Record<string, string>) {
  const payload = JSON.stringify({
    name: d.name,
    display_name: d.name,
    email: d.email || '',
    phone: d.phone ? `+91${d.phone.slice(-10)}` : '',
    other_fields: {
      'Unit Type': d.unit || '',
      'Budget Range': d.budget || '',
      Message: d.message || '',
      Consent: d.consent ? 'Yes' : 'No',
      Source: 'skylinebycandeur.in — Enquire Now',
      'Page URL': d.page || '',
    },
  });
  try {
    const res = await fetch(SITE.leadWebhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    // Fallback if the browser blocks the cross-origin JSON request: fire-and-forget simple request.
    await fetch(SITE.leadWebhook, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
  }
}

function Chevron() {
  return <span aria-hidden className="pointer-events-none absolute right-1 top-1/2 h-2 w-2 -translate-y-[70%] rotate-45 border-b-[1.5px] border-r-[1.5px] border-navy/55" />;
}

function EnquiryModal({ onClose }: { onClose: () => void }) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [err, setErr] = useState('');
  const [name, setName] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const n = (data.name || '').trim();
    const phone = (data.phone || '').replace(/\D/g, '');
    if (!n) return setErr('Please enter your name.');
    if (phone.length < 10) return setErr('Please enter a valid 10-digit mobile number.');
    if (!data.consent) return setErr('Please tick the consent box to continue.');
    setErr('');
    setState('sending');
    try {
      await sendLead({ ...data, phone, page: window.location.href });
      setName(n.split(' ')[0]);
      setState('sent');
    } catch (ex) {
      setErr(ex instanceof Error ? ex.message : 'Something went wrong. Please try again.');
      setState('idle');
    }
  }

  return (
    <>
      <div onClick={onClose} className="anim-fade fixed inset-0 z-[58] bg-[rgba(12,18,36,.7)] backdrop-blur-md" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enq-title"
        className="anim-panel fixed left-1/2 top-1/2 z-[59] max-h-[calc(100svh-24px)] w-[480px] max-w-[calc(100vw-24px)] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-[14px] bg-paper px-[clamp(22px,4vw,30px)] pb-7 pt-[clamp(24px,4vw,30px)] text-navy shadow-[0_50px_100px_-30px_rgba(0,0,0,.65)]"
      >
        <div className="flex items-center justify-between gap-4">
          <Image src="/assets/skyline-logo-navy.png" alt="Skyline by Candeur" width={160} height={70} className="h-10 w-auto" />
          <button type="button" onClick={onClose} aria-label="Close enquiry form" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy/20 text-[15px] transition duration-300 hover:rotate-90 hover:border-navy">✕</button>
        </div>
        <h2 id="enq-title" className="sr-only">Enquire about Skyline by Candeur</h2>

        {state !== 'sent' ? (
          <form onSubmit={onSubmit} noValidate className="mt-3.5 flex flex-col">
            <input name="name" placeholder="Name" aria-label="Name" autoComplete="name" className="field" />
            <input name="email" type="email" placeholder="Email ID" aria-label="Email ID" autoComplete="email" className="field" />
            <input name="phone" inputMode="tel" placeholder="Contact No." aria-label="Contact number" autoComplete="tel" className="field" />
            <div className="relative">
              <select name="unit" aria-label="Unit type" className="field cursor-pointer appearance-none pr-7 text-[13px] font-semibold uppercase tracking-[.14em]">
                {UNIT_OPTIONS.map((o) => <option key={o} value={o}>Select unit type: {o}</option>)}
              </select>
              <Chevron />
            </div>
            <div className="relative">
              <select name="budget" aria-label="Budget range" className="field cursor-pointer appearance-none pr-7 text-[13px] font-semibold uppercase tracking-[.14em]">
                {BUDGET_OPTIONS.map((o) => <option key={o} value={o}>Select budget range: {o}</option>)}
              </select>
              <Chevron />
            </div>
            <textarea name="message" rows={2} placeholder="Message" aria-label="Message" className="field resize-none" />
            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input type="checkbox" name="consent" defaultChecked className="mt-0.5 h-4 w-4 shrink-0 accent-golddeep" />
              <span className="text-[11.5px] leading-[1.65] text-navy/70">
                I authorize company representatives to Call, SMS, Email, or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
              </span>
            </label>
            {err && <p role="alert" className="mt-2.5 text-[13px] text-[#B4442A]">{err}</p>}
            <button
              type="submit"
              disabled={state === 'sending'}
              className="mt-3.5 rounded-lg bg-navy px-5 pb-[17px] pt-[19px] text-[13px] font-bold uppercase tracking-[.3em] text-gold shadow-[0_10px_24px_-10px_rgba(24,35,64,.6)] transition-colors hover:bg-[#2A3A66] disabled:opacity-60"
            >
              {state === 'sending' ? 'Sending…' : 'Submit now'}
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-3.5 pb-4 pt-10">
            <p className="label-xs text-golddeep">Request received</p>
            <p className="font-serif text-[32px] leading-[1.15]">Thank you, {name}.</p>
            <p className="text-[15px] font-light leading-[1.75] text-navy/75">Our relationship manager will call you shortly with pricing and a private preview slot.</p>
            <button type="button" onClick={onClose} className="mt-3 rounded-lg bg-navy px-5 pb-4 pt-[18px] text-[13px] font-bold uppercase tracking-[.3em] text-gold">Continue exploring</button>
          </div>
        )}
      </div>
    </>
  );
}
