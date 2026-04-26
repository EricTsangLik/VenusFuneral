import React from 'react';
import styled from 'styled-components';
import { Container, PageLayout, Text, transformCloundinaryImage } from '@venus-funeral/ui';
import Moment from 'react-moment';
import Head from 'next/head';

const BannerImage = styled.img`
  border-radius: 12px;
  width: 100%;
  margin: 0 auto;
  display: block;
  object-fit: contain;
  margin-bottom: 42px;
  margin-top: 42px;
`;

const Date = styled(Text)`
  margin-top: 12px;
  color: gray;
  font-weight: lighter;
`;

const ContentWrapper = styled.div`
  margin-top: 80px;

  p {
    font-size: ${({ theme }) => theme.fontSize.subtitle};
  }

  a {
    color: blue;
    text-decoration: underline;
  }
`;

const ContentContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
`;

const KnowledgeDefaultLayout = ({ data, children }: any) => {
  const metaDescription = data.description || data.content?.substring(0, 160) || '殯儀知識';
  const ogImageUrl = data.thumbnail ? transformCloundinaryImage(data.thumbnail, 1200) : '';

  // JSON-LD structured data for Article
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
        {data.date && <meta property="article:published_time" content={new global.Date(data.date).toISOString()} />}
        
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

      <ContentContainer>
        <Text fontSize="h3" component="h1" bold>{data.title}</Text>
        {data.date && (
          <Date fontSize="body1" component="div">
            <Moment format="DD-MM-YYYY">
              {data.date}
            </Moment>
          </Date>
        )}
        {data.thumbnail && (
          <BannerImage
            src={transformCloundinaryImage(data.thumbnail, 1200)}
            alt={data.title}
          />
        )}
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </ContentContainer>
    </PageLayout>
  );
};

export default KnowledgeDefaultLayout;
