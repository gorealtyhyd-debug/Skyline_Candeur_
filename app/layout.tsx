import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Overpass } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import EnquiryProvider from '@/components/EnquiryProvider';
import ScrollEffects from '@/components/ScrollEffects';

const serif = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Overpass({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-sans', display: 'swap' });

const geoPos = `${SITE.geo.lat};${SITE.geo.lng}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
  category: 'Real Estate',
  alternates: { canonical: '/', languages: { 'en-IN': '/' } },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: '/',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Skyline by Candeur — 59-storey towers in Narsingi, Hyderabad' }],
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description, images: ['/og.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  formatDetection: { telephone: false, email: false, address: false },
  // verification: { google: 'PASTE_SEARCH_CONSOLE_TOKEN' },
  other: {
    'geo.region': SITE.address.regionCode,
    'geo.placename': `${SITE.address.locality}, ${SITE.address.city}`,
    'geo.position': geoPos,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/video/p3578.jpg" />
        <JsonLd />
      </head>
      <body>
        <EnquiryProvider>
          {children}
          <ScrollEffects />
        </EnquiryProvider>
      </body>
    </html>
  );
}
