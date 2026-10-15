import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Towers from '@/components/Towers';
import FloorPlans from '@/components/FloorPlans';
import { Amenities, Arrival, Ceiling, Club, Faq, Footer, Location, MasterPlan, Overview, Residences, SkyVilla, Views } from '@/components/Sections';

export default function Page() {
  return (
    <>
      <a href="#overview" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Arrival />
        <Towers />
        <Ceiling />
        <Views />
        <SkyVilla />
        <Residences />
        <FloorPlans />
        <Amenities />
        <Club />
        <MasterPlan />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
