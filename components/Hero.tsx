import VideoReel from './VideoReel';
import Counter from './Counter';
import NavLink from './NavLink';
import { EnquireButton } from './EnquiryProvider';
import { STATS, VIDEOS } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-svh items-center overflow-hidden bg-navy">
      <div data-herofilm className="absolute inset-0 will-change-transform">
        <VideoReel clips={VIDEOS.hero} label="Skyline by Candeur towers, lobby and residences — film" overlay={false} priority />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg,rgba(24,35,64,.88) 0%,rgba(24,35,64,.6) 40%,rgba(24,35,64,.12) 75%),linear-gradient(180deg,rgba(24,35,64,.55) 0%,rgba(24,35,64,0) 22%,rgba(24,35,64,0) 70%,rgba(24,35,64,.6) 100%)',
        }}
      />

      <div data-herocopy className="px-site relative mx-auto w-full max-w-[1600px] pb-24 pt-[clamp(120px,15vh,170px)] lg:pb-[clamp(48px,7vh,80px)]">
        <div className="flex max-w-[660px] flex-col">
          <h1 id="hero-title" className="flex flex-wrap items-center gap-4 text-[11px] font-normal uppercase tracking-[.34em] text-cream">
            <span aria-hidden className="h-px w-11 bg-gold" />
            Skyline by Candeur · Luxury sky villas in Narsingi, near Financial District & Gachibowli
          </h1>
          <p className="display mt-7 text-[clamp(48px,6.4vw,104px)] !leading-none tracking-[-.01em] text-cream">
            Life, <em className="text-gold">elevated</em>
            <br />
            above all.
          </p>
          <p className="mt-7 max-w-[600px] text-[clamp(15px,1.25vw,18px)] font-light leading-[1.75] text-cream/90" style={{ textWrap: 'pretty' }}>
            Candeur Skyline — four 59-storey glass towers on 4.04 acres in Narsingi, minutes from the Financial District, Gachibowli and Kokapet. One floor, one sky villa — with 13 ft ceilings, private sky decks and the 60,000 sq.ft. Club Atmos.
          </p>

          <div className="mt-9 grid max-w-[640px] grid-cols-1 sm:grid-cols-2">
            <div className="bg-cream px-[26px] py-[22px] text-navy">
              <p className="text-[10px] uppercase tracking-[.3em] text-navy/70">Sky villas starting at</p>
              <p className="mt-2 flex flex-wrap items-baseline gap-3">
                <span className="font-serif text-[clamp(34px,3vw,44px)] leading-none">6,520</span>
                <span className="text-[10.5px] uppercase tracking-[.26em] text-navy/70">Sq.ft. onwards</span>
              </p>
            </div>
            <div className="flex flex-col justify-center border border-gold/30 bg-navy px-[26px] py-[22px]">
              <p className="text-[10px] uppercase tracking-[.3em] text-gold">One floor · One sky villa</p>
              <p className="mt-2 text-sm leading-normal text-cream">Private previews by appointment at the Experience Centre</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <EnquireButton className="btn-gold">Enquire now</EnquireButton>
            <NavLink href="#plans" className="btn-ghost">Floor plans</NavLink>
          </div>

          <dl className="mt-8 grid max-w-[640px] grid-cols-2 gap-6 border-t border-cream/25 pt-7 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-2.5 text-[10px] uppercase tracking-[.28em] text-cream/80">{s.label}</dt>
                <dd className="font-serif text-[clamp(30px,2.6vw,40px)] leading-none text-cream">
                  <Counter to={s.value} decimals={s.decimals} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
