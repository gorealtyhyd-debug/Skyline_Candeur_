import type { Clip } from '@/components/VideoReel';

const v = (id: number, kicker?: string, cap?: string): Clip => ({
  src: `/assets/video/v${id}.mp4`,
  poster: `/assets/video/p${id}.jpg`,
  kicker,
  cap,
});

export const VIDEOS = {
  hero: [v(3578), v(3579), v(3580), v(3581), v(3587)],
  arrival: [v(3587)],
  villa: [v(3580)],
  club: [v(3592)],
  residences: [
    v(3588, 'Arrival', 'Doors open to the horizon.'),
    v(3589, 'Living & dining', 'Thirteen feet of light.'),
    v(3590, 'Master bedroom', 'Wake to the skyline.'),
  ],
  amenities: [
    v(3584, 'Gardens & amphitheatre', 'Lantern-lit lawns and tiered seating.'),
    v(3591, 'Fitness studio', 'Train with the skyline in view.'),
    v(3585, 'Games lounge', 'Billiards beside a green courtyard.'),
    v(3586, 'Business centre', 'Meeting rooms, a lift away from home.'),
  ],
};

export const NAV = [
  { label: 'Overview', href: '#overview' },
  { label: 'Towers', href: '#towers' },
  { label: 'Residences', href: '#residences' },
  { label: 'Plans', href: '#plans' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Club Atmos', href: '#club' },
  { label: 'Location', href: '#location' },
];

export const STATS = [
  { value: 4.04, decimals: 2, label: 'Acres' },
  { value: 4, decimals: 0, label: 'Towers' },
  { value: 59, decimals: 0, label: 'Floors' },
  { value: 13, decimals: 0, label: 'Ft. ceilings' },
];

export const TOWERS = [
  { tower: 'Tower A', name: 'Skydome', size: '11,999', sqft: 11999, facing: 'East', img: '/assets/towers-up.jpg', pos: 'center 30%', copy: 'The crown of the address — the most expansive residences at Skyline, oriented to the morning sun.' },
  { tower: 'Tower B', name: 'Skylight', size: '7,495', sqft: 7495, facing: 'North', img: '/assets/towers-dusk.jpg', pos: 'center 55%', copy: 'Even, glare-free northern light across every room, with sweeping views over Narsingi.' },
  { tower: 'Tower C', name: 'Skycrest', size: '7,495', sqft: 7495, facing: 'North', img: '/assets/towers-aerial-night.jpg', pos: 'center 40%', copy: 'A twin to Skylight in plan, with its own vantage over the Financial District skyline.' },
  { tower: 'Tower D', name: 'Skylux', size: '6,520 – 6,600', sqft: 6520, facing: 'East · North', img: '/assets/towers-aerial-day.jpg', pos: 'center 45%', copy: 'Two plan options — 6,520 sq.ft. east facing and 6,600 sq.ft. north facing.' },
];

export const PLANS = [
  { tab: 'Tower A', name: 'Skydome', size: '11,999', facing: 'East', imgs: [{ src: '/assets/plan-tower-a.jpg', w: 2250, h: 1914 }] },
  { tab: 'Towers B & C', name: 'Skylight & Skycrest', size: '7,495', facing: 'North', imgs: [{ src: '/assets/plan-tower-bc.jpg', w: 1616, h: 2410 }] },
  { tab: 'Tower D', name: 'Skylux', size: '6,520 / 6,600', facing: 'East / North', imgs: [{ src: '/assets/plan-tower-d1.jpg', w: 1348, h: 2658 }, { src: '/assets/plan-tower-d2.jpg', w: 1268, h: 2500 }] },
];

export const AMENITIES = [
  { img: '/assets/pergola-walk.jpg', t: 'Pergola Promenade', d: 'A lantern-lit walk beneath climbing greens.', pos: 'center' },
  { img: '/assets/amphitheatre.jpg', t: 'Amphitheatre Lawn', d: 'Tiered seating for open-air evenings.', pos: 'center' },
  { img: '/assets/kids-garden.jpg', t: "Kids' Garden", d: 'Play spaces wrapped in planting.', pos: 'center' },
  { img: '/assets/landscape.jpg', t: 'Landscaped Gardens', d: 'Flowering canopies and open lawns.', pos: 'center 75%' },
  { img: '/assets/gazebo.jpg', t: 'Garden Gazebo', d: 'A shaded pavilion among the blooms.', pos: 'center' },
  { img: '/assets/play-court.jpg', t: 'Play Court', d: 'Active play for every age.', pos: 'center' },
  { img: '/assets/rooftop-pool.jpg', t: 'Rooftop Pool Lounge', d: 'Swim beneath the night sky.', pos: 'center 80%' },
  { img: '/assets/club-atmos.jpg', t: 'Club Atmos', d: 'A 60,000 sq.ft. private club.', pos: 'center 45%' },
];

export const UNIT_OPTIONS = [
  'Skydome (11,999 Sq.ft.)',
  'Skylight (7,495 Sq.ft.)',
  'Skycrest (7,495 Sq.ft.)',
  'Skylux (6,520 Sq.ft.)',
  'Skylux (6,600 Sq.ft.)',
];

// TODO: replace with confirmed price bands
export const BUDGET_OPTIONS = ['₹8 Cr – ₹10 Cr', '₹10 Cr – ₹15 Cr', '₹15 Cr – ₹20 Cr', '₹20 Cr +'];

// Answer-first FAQ copy: written to be quoted directly by search & AI answer engines.
export const FAQS = [
  { q: 'What is Candeur Skyline?', a: 'Candeur Skyline — officially Skyline by Candeur — is an ultra-luxury residential project by Candeur Constructions in Narsingi, Hyderabad: four 59-storey towers with one sky villa per floor, sized 6,520 to 11,999 sq.ft.' },
  { q: 'Is Skyline by Candeur near the Financial District?', a: 'Yes. Skyline by Candeur is in Narsingi, on the western edge of Hyderabad’s Financial District, a short drive from the Nanakramguda and Financial District office corridor.' },
  { q: 'Is Skyline by Candeur near Gachibowli?', a: 'Yes. Narsingi borders Gachibowli to the south-west, so Gachibowli, Hitech City and the IT corridor are a short commute from Skyline by Candeur.' },
  { q: 'Is Candeur Skyline close to Kokapet and the Outer Ring Road?', a: 'Yes. Skyline by Candeur sits between Kokapet and the Narsingi ORR interchange, giving quick Outer Ring Road access to the airport and the rest of Hyderabad.' },
  { q: 'Where is Skyline by Candeur located?', a: 'Skyline by Candeur is in Narsingi, in the Financial District of west Hyderabad, Telangana (PIN 500089) — close to the Outer Ring Road, Kokapet and Gachibowli.' },
  { q: 'How tall are the Skyline by Candeur towers?', a: 'The project has four residential towers of 59 floors each, presented by the developer as the tallest residential towers in South India.' },
  { q: 'What apartment sizes are available at Skyline by Candeur?', a: 'There are four residence types: Skydome (Tower A) at 11,999 sq.ft. east facing; Skylight (Tower B) and Skycrest (Tower C) at 7,495 sq.ft. north facing; and Skylux (Tower D) at 6,520 sq.ft. east facing or 6,600 sq.ft. north facing.' },
  { q: 'How many apartments are there on each floor?', a: 'Each floor has a single residence — one floor, one sky villa — so every home gets complete privacy and views on all sides.' },
  { q: 'What is the ceiling height of the residences?', a: 'Every residence has a 13 ft floor-to-ceiling interior height.' },
  { q: 'What amenities does Skyline by Candeur offer?', a: 'Residents get Club Atmos, a 60,000 sq.ft. clubhouse, plus a rooftop pool lounge, fitness studio, games lounge, business centre, pergola promenade, amphitheatre lawn, kids’ garden, play court and landscaped gardens across 4.04 acres.' },
  { q: 'Is Skyline by Candeur RERA registered?', a: 'Yes. Skyline by Candeur is registered with Telangana RERA under registration number P02400005946.' },
  { q: 'How can I book a site visit to Skyline by Candeur?', a: 'Use the Enquire Now form on skylinebycandeur.in to request a private preview; a relationship manager will call to schedule your Experience Centre visit.' },
  { q: 'Who is the developer of Skyline by Candeur?', a: 'Skyline is developed by Candeur Constructions, a Hyderabad-based real estate developer.' },
];
