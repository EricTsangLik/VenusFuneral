import { Container, Header, PageLayout, BlogCard } from '@venus-funeral/ui';
import { NextPage } from 'next';
import styled from 'styled-components';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import safeJsonStringify from 'safe-json-stringify';
import Head from 'next/head';

const BlogCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MediaPage: NextPage = ({ media }: any) => {
  const pageTitle = "傳媒報導 | Venus Funeral 殯儀服務";
  const pageDescription = "了解 Venus Funeral 金星殯儀的傳媒報導與社會貢獻，閱讀各大媒體的專題訪問，讓您對我們有更深認識。";

  return (
    <PageLayout title="傳媒報導">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="傳媒報導, 殯儀業訪問, Venus Funeral 訪問" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <Container>
        <Header>傳媒報導</Header>
        <BlogCardsWrapper>
          {
            media && media.map(({ thumbnail, title, id }, idx) => (
              <BlogCard
                href={`/media/${encodeURIComponent(id)}`}
                thumbnail={thumbnail}
                title={title}
                key={idx}
              />
            ))
          }
        </BlogCardsWrapper>
      </Container>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const filesInMedia = fs.readdirSync('./_posts/media/').filter(file => file.endsWith('.md'));

  const media = filesInMedia.map((filename) => {
    const file = fs.readFileSync(`./_posts/media/${filename}`, 'utf8');
    const matterData = matter(file);
    const parsedData = JSON.parse(safeJsonStringify(matterData.data));
    return {
      ...parsedData,
      id: filename.replace('.md', ''),
    };
  });

  return {
    props: {
      media,
    },
  };
}

export default MediaPage;
