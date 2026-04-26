import React from 'react';
import styled from 'styled-components';
import { Container, PageLayout, Text, transformCloundinaryImage } from '@venus-funeral/ui';
import Moment from 'react-moment';
import Head from 'next/head';

const PremiumBanner = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 50vh;
  min-height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 60px;
`;

const PremiumTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  
  ${({ theme }) => theme.breakPoints.tablet} {
    font-size: 4rem;
  }
`;

const PremiumDate = styled.div`
  font-size: 1.2rem;
  opacity: 0.8;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 20px;
    font-style: italic;
    font-size: 1.3rem;
    margin: 2rem 0;
    color: #555;
  }

  a {
    color: blue;
    text-decoration: underline;
  }
`;

const ContentContainer = styled(Container)`
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const KnowledgePremiumLayout = ({ data, children }: any) => {
  const bannerImage = data.thumbnail ? transformCloundinaryImage(data.thumbnail, 1920) : '';
  const metaDescription = data.description || data.content?.substring(0, 160) || '殯儀知識';
  const ogImageUrl = data.thumbnail ? transformCloundinaryImage(data.thumbnail, 1200) : '';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "image": ogImageUrl ? [ogImageUrl] : [],
    "datePublished": data.date ? new global.Date(data.date).toISOString() : undefined,
    "description": metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Venus Funeral",
      "url": "https://www.venusfuneral.com"
    }
  };

  return (
    <PageLayout
      title={data.title}
      description={metaDescription}
      thumbnail={transformCloundinaryImage(data.thumbnail, 720)}
    >
      <Head>
        <title>{data.title} | Venus Funeral 殯儀知識</title>
        <meta name="description" content={metaDescription} />
        {data.keywords && <meta name="keywords" content={data.keywords} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={metaDescription} />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={metaDescription} />
        {ogImageUrl && <meta property="twitter:image" content={ogImageUrl} />}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <PremiumBanner bgImage={bannerImage}>
        <div>
          <PremiumTitle>{data.title}</PremiumTitle>
          {data.date && (
            <PremiumDate>
              <Moment format="DD MMMM YYYY">
                {data.date}
              </Moment>
            </PremiumDate>
          )}
        </div>
      </PremiumBanner>
      
      <ContentContainer>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </ContentContainer>
    </PageLayout>
  );
};

export default KnowledgePremiumLayout;
