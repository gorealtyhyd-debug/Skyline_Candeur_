export const SITE = {
  name: 'Skyline by Candeur',
  shortName: 'Skyline',
  url: 'https://skylinebycandeur.in',
  title: 'Skyline by Candeur | Candeur Skyline Narsingi, Financial District',
  description:
    'Skyline by Candeur (Candeur Skyline) — luxury sky villas in Narsingi, near Financial District, Gachibowli & Kokapet, Hyderabad. Four 59-storey towers, one villa per floor, 6,520–11,999 sq.ft. TS RERA P02400005946.',
  keywords: [
    // brand + spelling variants
    'Skyline by Candeur', 'Candeur Skyline', 'Skyline Candeur', 'Candeur Skyline Hyderabad', 'Skyline Candeur Narsingi',
    'Candeur Skyline Narsingi', 'Skyline by Candeur price', 'Skyline by Candeur floor plan', 'Skyline by Candeur brochure',
    'Candeur Constructions Skyline', 'Candeur Skyline RERA', 'Skyline Narsingi', 'Candeur Narsingi', 'Candeur Skyline sky villas',
    // location intent
    'luxury apartments near Financial District Hyderabad', 'luxury flats near Gachibowli', 'sky villas near Gachibowli',
    'luxury apartments Narsingi', 'luxury apartments Kokapet', 'apartments near Nanakramguda', 'apartments near ORR Narsingi',
    'luxury homes near Hitech City', 'high rise apartments Financial District Hyderabad', 'new launch Narsingi',
    // product intent
    'sky villas Hyderabad', 'ultra luxury apartments Hyderabad', 'one apartment per floor Hyderabad', '59 floor towers Hyderabad',
    'tallest residential towers South India', 'tallest towers Hyderabad', '6500 sq ft apartments Hyderabad', '12000 sq ft apartment Hyderabad',
  ],
  rera: 'P02400005946',
  developer: 'Candeur Constructions',
  // Privyr generic webhook — leads from the Enquire Now form
  leadWebhook: 'https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/bKY9JFdX',
  mapsUrl: 'https://maps.app.goo.gl/RrQgQAQjFaJF3UMH6',
  mapsEmbed: 'https://maps.google.com/maps?q=Skyline%20by%20Candeur%2C%20Narsingi%2C%20Hyderabad&z=14&output=embed',
  // TODO: replace with exact site coordinates from the Google Maps pin
  geo: { lat: 17.3899, lng: 78.3588 },
  aliases: ['Candeur Skyline', 'Skyline Candeur', 'Skyline Narsingi', 'Candeur Skyline Narsingi', 'Skyline by Candeur Hyderabad'],
  nearby: ['Financial District', 'Gachibowli', 'Kokapet', 'Nanakramguda', 'Outer Ring Road (ORR)', 'Hitech City', 'Manikonda', 'Puppalaguda', 'Gandipet', 'Rajiv Gandhi International Airport (via ORR)'],
  address: {
    locality: 'Narsingi',
    area: 'Financial District',
    city: 'Hyderabad',
    district: 'Ranga Reddy',
    region: 'Telangana',
    regionCode: 'IN-TG',
    postalCode: '500089',
    country: 'IN',
  },
  locale: 'en_IN',
  themeColor: '#182340',
} as const;
