import { Navbar, theme } from '@venus-funeral/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { attributes as contactAttributes } from '../../../content/contactus.md';
import './styles.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://venusfuneralservice.com';

const { phoneNumber, email, facebookLink, whatsapp } = contactAttributes;

/** Local business schema — fields mirror visible /contact UI values. */
const funeralHomeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FuneralHome',
  '@id': `${SITE_URL}/#funeralhome`,
  name: '金星殯儀',
  alternateName: ['金星殯儀服務', 'Venus Funeral'],
  url: SITE_URL,
  telephone: phoneNumber,
  email,
  image: `${SITE_URL}/favicon.ico`,
  sameAs: [facebookLink].filter(Boolean),
  areaServed: {
    '@type': 'AdministrativeArea',
    name: '香港',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: phoneNumber,
      email,
      contactType: 'customer service',
      availableLanguage: ['zh-HK', 'zh-TW', 'en'],
      areaServed: 'HK',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: `+852 ${whatsapp || '93810003'}`,
      contactType: 'customer support',
      availableLanguage: ['zh-HK', 'zh-TW'],
      areaServed: 'HK',
      url: `https://wa.me/852${whatsapp || '93810003'}`,
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
};

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to venus-funeral-website!</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(funeralHomeStructuredData),
          }}
        />
      </Head>
      <main className="app">
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
