import { Navbar, theme } from '@venus-funeral/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import './styles.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to venus-funeral-website!</title>
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
