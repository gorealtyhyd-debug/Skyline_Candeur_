import { SITE } from '@/lib/site';
import { FAQS, TOWERS, AMENITIES, VIDEOS } from '@/lib/content';

export default function JsonLd() {
  const u = SITE.url;
  const address = {
    '@type': 'PostalAddress',
    addressLocality: `${SITE.address.locality}, ${SITE.address.city}`,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  };
  const geo = { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng };

  const graph = [
    { '@type': 'WebSite', '@id': `${u}/#website`, url: u, name: SITE.name, alternateName: [...SITE.aliases, 'skylinebycandeur.in'], inLanguage: 'en-IN', publisher: { '@id': `${u}/#partner` } },
    {
      '@type': 'Organization',
      '@id': `${u}/#partner`,
      name: `${SITE.name} — Authorized Channel Partner`,
      url: u,
      logo: `${u}/assets/skyline-logo-navy.png`,
      areaServed: [...SITE.nearby, SITE.address.city].map((name) => ({ '@type': 'Place', name })),
    },
    { '@type': 'Organization', '@id': `${u}/#developer`, name: SITE.developer, logo: `${u}/assets/candeur-logo.png` },
    {
      '@type': 'WebPage',
      '@id': `${u}/#webpage`,
      url: u,
      name: SITE.title,
      description: SITE.description,
      isPartOf: { '@id': `${u}/#website` },
      about: { '@id': `${u}/#residence` },
      primaryImageOfPage: `${u}/og.jpg`,
      inLanguage: 'en-IN',
    },
    {
      '@type': ['ApartmentComplex', 'Residence'],
      '@id': `${u}/#residence`,
      name: SITE.name,
      alternateName: [...SITE.aliases],
      keywords: SITE.keywords.join(', '),
      containedInPlace: [
        { '@type': 'Place', name: 'Narsingi, Hyderabad' },
        { '@type': 'Place', name: 'Financial District, Hyderabad' },
        { '@type': 'City', name: 'Hyderabad' },
      ],
      containsPlace: { '@type': 'Place', name: 'Club Atmos clubhouse' },
      description: SITE.description,
      url: u,
      image: [`${u}/og.jpg`, `${u}/assets/towers-dusk.jpg`, `${u}/assets/towers-aerial-night.jpg`, `${u}/assets/living-room.jpg`],
      address,
      geo,
      hasMap: SITE.mapsUrl,
      brand: { '@id': `${u}/#developer` },
      tourBookingPage: `${u}/#enquire`,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Towers', value: 4 },
        { '@type': 'PropertyValue', name: 'Floors per tower', value: 59 },
        { '@type': 'PropertyValue', name: 'Land area', value: 4.04, unitText: 'acres' },
        { '@type': 'PropertyValue', name: 'Residences per floor', value: 1 },
        { '@type': 'PropertyValue', name: 'Ceiling height', value: 13, unitText: 'ft' },
        { '@type': 'PropertyValue', name: 'Clubhouse', value: 60000, unitText: 'sq.ft.' },
        { '@type': 'PropertyValue', name: 'TS RERA registration', value: SITE.rera },
      ],
      amenityFeature: AMENITIES.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a.t, value: true })),
      accommodationFloorPlan: TOWERS.map((t) => ({
        '@type': 'FloorPlan',
        name: `${t.name} — ${t.tower}`,
        floorSize: { '@type': 'QuantitativeValue', value: t.sqft, unitCode: 'FTK', unitText: 'sq.ft.' },
        description: `${t.facing} facing. ${t.copy}`,
      })),
      subjectOf: VIDEOS.amenities.map((c) => ({
        '@type': 'VideoObject',
        name: `${SITE.name} — ${c.kicker}`,
        description: c.cap,
        thumbnailUrl: `${u}${c.poster}`,
        contentUrl: `${u}${c.src}`,
        uploadDate: '2026-10-01',
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${u}/#faq`,
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
}
