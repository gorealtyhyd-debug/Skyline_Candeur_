import Image from 'next/image';
import VideoReel from './VideoReel';
import { EnquireButton } from './EnquiryProvider';
import { AMENITIES, FAQS, VIDEOS } from '@/lib/content';
import { SITE } from '@/lib/site';

function ParallaxImage({ src, alt, par = -0.08, scale = 1.18, pos, sizes }: { src: string; alt: string; par?: number; scale?: number; pos?: string; sizes: string }) {
  return (
    <div data-par={par} data-scale={scale} className="absolute inset-0 will-change-transform">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: pos }} />
    </div>
  );
}

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="px-site py-section relative bg-cream text-navy">
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(48px,7vw,120px)] lg:grid-cols-2">
        <div data-reveal>
          <p className="eyebrow-dark">Envisioning…</p>
          <h2 id="overview-title" className="display mt-[18px] text-[clamp(40px,5.2vw,80px)] tracking-[.01em]">Above all.</h2>
          <p className="copy mt-9 max-w-[560px] text-navy/90">
            Skyline by Candeur (Candeur Skyline) is an oasis of luxury in Narsingi, Hyderabad, beside the Financial District and Gachibowli — expanded beyond imagination but within your reach. The tallest towers of opulent residences in South India, built to encapsulate the spirit of elevation, aspiration and an unparalleled living experience.
          </p>
          <p className="copy mt-5 max-w-[560px] text-navy/90">
            It&rsquo;s a name that tells a story — of reaching for the sky, of soaring ambitions, and of creating a life that&rsquo;s nothing short of remarkable.
          </p>
          <blockquote className="mt-10 font-serif text-[clamp(20px,1.8vw,26px)] italic leading-[1.4] text-golddeep">
            Where the sky is not the limit —<br />it&rsquo;s just the beginning.
          </blockquote>
        </div>
        <figure data-clip className="relative m-0 aspect-[4/5] overflow-hidden">
          <ParallaxImage src="/assets/towers-day.jpg" alt="Skyline by Candeur 59-storey glass towers by day, Narsingi Hyderabad" pos="center 40%" sizes="(min-width:1024px) 50vw, 100vw" />
          <figcaption className="label-xs absolute bottom-[22px] left-6 text-cream">Artist&rsquo;s impression</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Arrival() {
  return (
    <section data-expand aria-labelledby="arrival-title" className="relative h-[260vh] bg-cream text-navy">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div data-expand-pre className="pointer-events-none absolute inset-x-0 top-[clamp(96px,13vh,140px)] z-[2] px-6 text-center">
          <p className="eyebrow-dark">The arrival</p>
        </div>
        <div data-expand-box className="absolute inset-0 overflow-hidden will-change-[clip-path]" style={{ clipPath: 'inset(16% 22% 16% 22% round 24px)' }}>
          <div className="absolute inset-0 will-change-transform">
            <VideoReel clips={VIDEOS.arrival} label="Skyline by Candeur grand lobby" overlay="linear-gradient(180deg,rgba(24,35,64,.2) 0%,rgba(24,35,64,0) 40%,rgba(24,35,64,.85) 100%)" />
          </div>
        </div>
        <div data-expand-txt className="px-site absolute inset-x-0 bottom-0 z-[2] flex flex-wrap items-end justify-between gap-7 pb-[clamp(48px,8vh,90px)] text-cream opacity-0">
          <h2 id="arrival-title" className="display max-w-[820px] text-[clamp(40px,5.6vw,92px)] !leading-none">
            A lobby that greets you <em className="text-gold">by name.</em>
          </h2>
          <p className="max-w-[380px] text-base font-light leading-[1.8] text-cream/90">Double-height marble, sculpted light and a concierge desk — every arrival at Skyline feels like a private hotel.</p>
        </div>
      </div>
    </section>
  );
}

export function Ceiling() {
  return (
    <section aria-labelledby="ceiling-title" className="px-site relative overflow-hidden bg-sand py-[clamp(80px,10vw,140px)] text-navy">
      <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex min-h-[clamp(320px,40vw,560px)] items-center justify-center">
          <span data-ceil aria-hidden className="font-serif text-[clamp(220px,30vw,460px)] leading-[.8] tracking-[-.04em] will-change-transform">13</span>
        </div>
        <div data-reveal>
          <p className="text-[11.5px] uppercase tracking-[.38em]">Volume as luxury</p>
          <h2 id="ceiling-title" className="display mt-[18px] text-[clamp(40px,5vw,78px)] uppercase !leading-none tracking-[.02em]">
            <span className="sr-only">13 </span>Feet high<br />interior ceiling
          </h2>
          <p className="mt-7 max-w-[460px] text-[17px] font-light leading-[1.8]">Rooms that breathe. Thirteen feet, floor to ceiling — so light travels deeper, glass rises taller, and every room feels like a gallery for the sky.</p>
        </div>
      </div>
    </section>
  );
}

export function Views() {
  return (
    <section aria-labelledby="views-title" className="px-site py-section relative bg-cream text-navy">
      <div className="wrap grid grid-cols-1 items-end gap-[clamp(28px,4vw,56px)] md:grid-cols-2">
        <figure data-clip className="relative m-0 aspect-[3/4] overflow-hidden">
          <ParallaxImage src="/assets/lifestyle-view.jpg" alt="Evening view over Hyderabad from a Skyline sky villa" par={-0.06} scale={1.16} sizes="(min-width:768px) 50vw, 100vw" />
        </figure>
        <div className="flex flex-col gap-[clamp(28px,4vw,56px)]">
          <div data-reveal>
            <h2 id="views-title" className="display text-[clamp(52px,7.2vw,116px)] uppercase !leading-[.92] text-golddeep">Splendid<br />views</h2>
            <p className="copy mt-7 max-w-[500px] text-navy/90">From the 59th floor, the Financial District becomes a private panorama — green ridges by day, a field of lights by night.</p>
          </div>
          <figure data-clip className="relative m-0 aspect-[16/10] overflow-hidden">
            <ParallaxImage src="/assets/sky-deck.jpg" alt="Private sky deck at Skyline by Candeur" par={-0.05} scale={1.14} sizes="(min-width:768px) 50vw, 100vw" />
            <figcaption className="label-xs absolute bottom-[18px] left-[22px] text-cream">Private sky deck</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function SkyVilla() {
  return (
    <section aria-labelledby="villa-title" className="relative flex h-[110vh] min-h-[680px] items-center justify-center overflow-hidden text-center">
      <VideoReel clips={VIDEOS.villa} label="Skyline by Candeur sky villa interiors" overlay={false} />
      <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(24,35,64,.75),rgba(24,35,64,.15) 45%,rgba(24,35,64,.8))' }} />
      <div data-reveal className="relative px-6">
        <p className="eyebrow !tracking-[.42em]">The Skyline promise</p>
        <h2 id="villa-title" className="display mt-[22px] text-[clamp(46px,7vw,112px)] uppercase !leading-none tracking-[.06em] text-cream">One floor.<br />One sky villa.</h2>
      </div>
    </section>
  );
}

export function Residences() {
  return (
    <section id="residences" aria-labelledby="res-title" className="px-site py-section bg-cream text-navy">
      <div className="wrap">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow-dark">The residences</p>
            <h2 id="res-title" className="display mt-[18px] max-w-[760px] text-[clamp(38px,5vw,76px)]">Live in the moment, in the middle of it all.</h2>
          </div>
          <p className="max-w-[400px] text-base font-light leading-[1.8] text-navy/80">Scenic master bedrooms, generous living spaces and private sky decks — composed in warm timber, stone and glass.</p>
        </div>
        <div className="relative mt-[clamp(40px,5vw,72px)] aspect-video min-h-[360px] overflow-hidden bg-navy">
          <VideoReel clips={VIDEOS.residences} label="Skyline by Candeur residences film" chrome title="Residences · Film" />
        </div>
        <div className="mt-[clamp(20px,3vw,40px)] grid grid-cols-1 gap-[clamp(20px,3vw,40px)] md:grid-cols-2">
          {[
            { src: '/assets/master-bedroom.jpg', t: 'Scenic master bedroom', alt: 'Master bedroom with skyline view at Skyline by Candeur' },
            { src: '/assets/living-room.jpg', t: 'Grand living', alt: 'Living room with 13 ft ceiling at Skyline by Candeur' },
          ].map((r, k) => (
            <figure key={r.src} data-reveal className="group m-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={r.src} alt={r.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105" />
              </div>
              <figcaption className="mt-[18px] flex items-baseline justify-between gap-4">
                <span className="font-serif text-[26px]">{r.t}</span>
                <span className="label-xs text-golddeep">0{k + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <>
      <section id="amenities" aria-labelledby="amen-title" className="px-site bg-cream pb-[clamp(40px,5vw,72px)] pt-[clamp(90px,12vw,170px)] text-navy">
        <div className="wrap">
          <div data-reveal className="mx-auto max-w-[900px] text-center">
            <p className="eyebrow-dark">Amenities</p>
            <h2 id="amen-title" className="display mt-[18px] text-[clamp(38px,5.2vw,80px)]">A sanctuary of sophistication and bliss.</h2>
            <p className="copy mx-auto mt-7 max-w-[620px] text-navy/90">Total leisure at your service — lantern-lit promenades, open-air gathering lawns, gardens for children and a rooftop pool that meets the horizon.</p>
          </div>
          <div className="relative mt-[clamp(44px,5vw,80px)] aspect-video max-h-[86vh] min-h-[380px] w-full overflow-hidden bg-black">
            <VideoReel clips={VIDEOS.amenities} label="Skyline by Candeur amenities film" chrome title="Amenities · Film" />
          </div>
        </div>
      </section>

      <section data-hscroll aria-label="Amenities gallery" className="relative h-[300vh] bg-cream text-navy max-lg:h-[360vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center gap-[clamp(24px,4vh,44px)] overflow-hidden">
          <div className="px-site flex items-end justify-between gap-6">
            <p className="font-serif text-[clamp(28px,3vw,44px)] leading-[1.05]">Exclusive — <em className="text-golddeep">above all.</em></p>
            <div aria-hidden className="relative h-px flex-[0_1_280px] overflow-hidden bg-navy/20">
              <div data-hprog className="absolute inset-0 origin-left scale-x-0 bg-golddeep" />
            </div>
          </div>
          <ul data-htrack className="px-site m-0 flex w-max list-none gap-[clamp(16px,2vw,28px)] will-change-transform">
            {AMENITIES.map((a, k) => (
              <li key={a.t} className="group relative h-[min(62vh,620px)] w-[clamp(270px,30vw,500px)] shrink-0 overflow-hidden bg-navy">
                <Image src={a.img} alt={`${a.t} at Skyline by Candeur, Narsingi`} fill sizes="(min-width:1024px) 30vw, 80vw" className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]" style={{ objectPosition: a.pos }} />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/0 to-navy/0" />
                <div className="pointer-events-none absolute inset-x-[26px] bottom-[26px]">
                  <p className="text-[10.5px] tracking-[.3em] text-gold">{String(k + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2.5 font-serif text-[clamp(24px,2.2vw,32px)] leading-[1.1] text-cream">{a.t}</h3>
                  <p className="mt-2.5 text-sm font-light leading-[1.6] text-cream/75">{a.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function Club() {
  return (
    <section id="club" aria-labelledby="club-title" className="px-site py-section bg-navy text-cream">
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(40px,7vw,120px)] lg:grid-cols-2">
        <div data-reveal>
          <p className="eyebrow">The clubhouse</p>
          <h2 id="club-title" className="display mt-[18px] text-[clamp(56px,7vw,112px)] !leading-[.95]">Club Atmos</h2>
          <p className="mt-9 flex items-baseline gap-4">
            <span className="font-serif text-[clamp(48px,5vw,72px)] leading-none text-gold">60,000</span>
            <span className="text-[11px] uppercase tracking-[.3em] text-cream/70">Sq.Ft. clubhouse</span>
          </p>
          <p className="copy mt-7 max-w-[480px] text-cream/80">A private, multi-level club wrapped in a sculpted timber façade — wellness, recreation and celebration, a short walk from your lift lobby.</p>
        </div>
        <figure data-clip className="relative m-0 aspect-[4/5] overflow-hidden">
          <VideoReel clips={VIDEOS.club} label="Inside Club Atmos, the 60,000 sq.ft. clubhouse" overlay="linear-gradient(0deg,rgba(24,35,64,.5),rgba(24,35,64,0) 40%)" />
          <figcaption className="label-xs absolute bottom-[18px] left-[22px] text-cream">Inside Club Atmos</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function MasterPlan() {
  return (
    <section id="masterplan" aria-labelledby="mp-title" className="px-site py-section bg-cream text-navy">
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
        <div className="flex justify-center bg-black p-[clamp(16px,3vw,40px)]">
          <Image src="/assets/master-plan.jpg" alt="Skyline by Candeur master plan — four towers on 4.04 acres" width={2008} height={3170} sizes="(min-width:1024px) 520px, 100vw" className="h-auto w-full max-w-[520px]" />
        </div>
        <div data-reveal>
          <p className="eyebrow-dark">Master plan · 4.04 acres</p>
          <h2 id="mp-title" className="display mt-[18px] text-[clamp(38px,5vw,76px)] uppercase">Nature inspired landscaping</h2>
          <p className="copy mt-7 max-w-[500px] text-navy/90">Four towers set into layered gardens — flowering canopies, shaded walks and open lawns that soften the ground plane and keep the city at a calm distance.</p>
          <div className="relative mt-10 aspect-video overflow-hidden">
            <Image src="/assets/landscape.jpg" alt="Landscaped gardens at Skyline by Candeur" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" style={{ objectPosition: 'center 70%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="loc-title" className="px-site bg-navy py-[clamp(90px,12vw,160px)] text-cream">
      <div className="wrap">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Location</p>
            <h2 id="loc-title" className="display mt-[18px] text-[clamp(40px,5.4vw,84px)] !leading-none">
              Aspire. Ascend. <em className="text-gold">Arrive.</em>
            </h2>
          </div>
          <p className="max-w-[420px] text-base font-light leading-[1.8] text-cream/80">
            Candeur Skyline sits in Narsingi on the edge of Hyderabad&rsquo;s Financial District — close to Gachibowli, Kokapet, Nanakramguda and the Narsingi ORR interchange.
          </p>
        </div>
        <div data-reveal className="mt-[clamp(40px,5vw,64px)]">
          <h3 className="label-xs text-gold">Near Skyline by Candeur</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {SITE.nearby.map((n) => (
              <li key={n} className="rounded-full border border-cream/25 px-4 pb-2 pt-2.5 text-[13px] tracking-[.04em] text-cream/85">{n}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border border-gold/20 bg-panel">
          <div className="relative h-[clamp(360px,50vw,520px)] overflow-hidden">
            <iframe
              src={SITE.mapsEmbed}
              title="Map — Skyline by Candeur, Narsingi, Hyderabad"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 block h-full w-full border-0"
            />
          </div>
          <address className="flex flex-wrap items-center justify-between gap-4 px-[clamp(18px,2vw,24px)] py-[18px] not-italic">
            <span className="text-sm text-cream/80">Skyline by Candeur · {SITE.address.locality}, {SITE.address.area}, {SITE.address.city}, {SITE.address.region}</span>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.2em]">
              Open in Google Maps <span aria-hidden className="text-sm tracking-normal">↗</span>
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-site py-section bg-cream text-navy">
      <div className="wrap grid grid-cols-1 gap-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
        <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow-dark">Questions, answered</p>
          <h2 id="faq-title" className="display mt-[18px] text-[clamp(38px,4.6vw,70px)]">Skyline by Candeur — FAQ</h2>
          <p className="copy mt-6 max-w-[420px] text-navy/80">Everything you need to know about Candeur Skyline — towers, residences, amenities and its location near the Financial District and Gachibowli.</p>
          <EnquireButton className="btn mt-9 bg-navy text-cream hover:bg-[#2A3A66]">Ask us anything</EnquireButton>
        </div>
        <div className="border-t border-navy/15">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-navy/15">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
                <h3 className="font-serif text-[clamp(20px,1.8vw,26px)] font-normal leading-snug">{f.q}</h3>
                <span aria-hidden className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-golddeep" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-golddeep transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="max-w-[640px] pb-7 text-base font-light leading-[1.8] text-navy/85">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-site border-t border-gold/15 bg-navy pb-24 pt-[clamp(60px,7vw,96px)] text-cream lg:pb-10">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <Image src="/assets/skyline-logo.png" alt="Skyline by Candeur" width={200} height={90} className="h-14 w-auto" />
          <Image src="/assets/candeur-logo.png" alt="Candeur Constructions — Build with Honesty" width={200} height={60} className="h-10 w-auto" />
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-5 border-t border-cream/10 pt-7 text-[11.5px] leading-relaxed text-cream/60">
          <p>TS RERA No. {SITE.rera}</p>
          <p className="max-w-[640px]">All images are artist&rsquo;s impressions. Specifications and plans are indicative and subject to change.</p>
        </div>
        <p className="mt-5 max-w-[900px] text-[11.5px] leading-[1.7] text-cream/60">
          <span className="text-[10.5px] uppercase tracking-[.2em] text-gold">Disclaimer:</span> This website is meant only for information purposes. It should not be considered/ claimed as an official site. This website belongs to authorized channel partner.
        </p>
      </div>
    </footer>
  );
}
