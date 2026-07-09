import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { ImWhatsapp } from 'react-icons/im';
import Navbar from '../navbar/navbar';
import Footer, { FooterProps } from '../footer/footer';
import Logo from '../../assets/thumbnail.png'

const DEFAULT_DESCRIPTION =
  '金星殯儀提供香港一站式殯儀服務、喪禮安排、文件代辦及哀傷支援。'

/* eslint-disable-next-line */
export interface PageLayoutProps extends FooterProps {
  title?: string;
  /** Full document title; when set, skips the default `| 金星殯儀` suffix. */
  seoTitle?: string;
  description?: string;
  thumbnail?: string;
}

const WhatsappFab = styled.a`
  position: fixed;
  background: #23ce63;
  right: 24px;
  bottom: 24px;
  color: white;
  padding: 16px;
  border-radius: 50%;
  z-index: 500;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 6%), 0 2px 32px 0 rgb(0 0 0 / 16%);

  svg {
    fill: white;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    right: 32px;
    bottom: 60px;
  }
`;

export function PageLayout({
  title,
  seoTitle,
  description,
  disableCta,
  children,
  thumbnail
}: PropsWithChildren<PageLayoutProps>) {
  const router = useRouter();
  const pageTitle = seoTitle || `${title ? title + ' | ' : ''}金星殯儀`
  const pageDescription = description || DEFAULT_DESCRIPTION
  const pageThumbnail = thumbnail || (Logo as any).src
  const canonicalUrl = `https://venusfuneralservice.com${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="" />
        <meta name="description" content={pageDescription} />
        {/*Facebook SEO*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageThumbnail} />

        {/*Twitter SEO*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chainsify" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageThumbnail} />
      </Head>
      {children}
      <WhatsappFab
        href="https://wa.me/85293810003"
        aria-label="WhatsApp 查詢金星殯儀"
        target="_blank"
        rel="noreferrer"
      >
        <ImWhatsapp color="#fff" fontSize={42} aria-hidden="true" />
      </WhatsappFab>
      <Footer disableCta={disableCta} />
    </>
  );
}

export default PageLayout;
