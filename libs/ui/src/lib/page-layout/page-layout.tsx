import styled from 'styled-components';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { ImWhatsapp } from 'react-icons/im';
import Navbar from '../navbar/navbar';
import Footer, { FooterProps } from '../footer/footer';
import { attributes } from '../../../../../content/aboutus.md'
import Logo from '../../assets/thumbnail.png'

const { companyIntro } = attributes
/* eslint-disable-next-line */
export interface PageLayoutProps extends FooterProps {
  title?: string;
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
  description,
  disableCta,
  children,
  thumbnail
}: PropsWithChildren<PageLayoutProps>) {
  const pageTitle = `${title ? title + ' | ' : ''}金星殯儀`
  const pageDescription = description || companyIntro
  const pageThumbnail = thumbnail || (Logo as any).src

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
      <WhatsappFab href={`whatsapp://send?phone=852${93810003}`}>
        <ImWhatsapp color="#fff" fontSize={42} />
      </WhatsappFab>
      <Footer disableCta={disableCta} />
    </>
  );
}

export default PageLayout;
