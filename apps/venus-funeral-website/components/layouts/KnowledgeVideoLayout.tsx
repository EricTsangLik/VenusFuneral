import React from 'react';
import styled from 'styled-components';
import { Container, PageLayout, Text, transformCloundinaryImage } from '@venus-funeral/ui';
import Moment from 'react-moment';
import Head from 'next/head';

const VideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 40px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  background: #000;
  aspect-ratio: 16/9;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 40px;
  
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

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Date = styled(Text)`
  margin-top: 12px;
  color: gray;
  font-weight: lighter;
`;

const KnowledgeVideoLayout = ({ data, children }: any) => {
  const metaDescription = data.description || data.content?.substring(0, 160) || '殯儀知識';
  const ogImageUrl = data.thumbnail ? transformCloundinaryImage(data.thumbnail, 1200) : '';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": data.title,
    "description": metaDescription,
    "thumbnailUrl": ogImageUrl ? [ogImageUrl] : [],
    "uploadDate": data.date ? new global.Date(data.date).toISOString() : undefined,
    "embedUrl": data.videoUrl
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
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={metaDescription} />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        {data.videoUrl && <meta property="og:video" content={data.videoUrl} />}
        
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
        <HeaderSection>
          <Text fontSize="h2" component="h1" bold>{data.title}</Text>
          {data.date && (
            <Date fontSize="body1" component="div">
              <Moment format="DD-MM-YYYY">
                {data.date}
              </Moment>
            </Date>
          )}
        </HeaderSection>

        {data.videoUrl && (
          <VideoContainer>
            <iframe 
              src={data.videoUrl} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              title={data.title}
            />
          </VideoContainer>
        )}

        <ContentWrapper>
          {children}
        </ContentWrapper>
      </ContentContainer>
    </PageLayout>
  );
};

export default KnowledgeVideoLayout;
