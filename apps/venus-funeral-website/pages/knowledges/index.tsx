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

const KnowledgesPage: NextPage = ({ blogs }: any) => {
  const pageTitle = "殯儀知識 | Venus Funeral 殯儀服務";
  const pageDescription = "Venus Funeral 提供全面的殯儀知識、帛金常識、殯儀習俗及守夜守考等實用資訊，協助您了解香港各類喪葬禮儀。";

  return (
    <PageLayout title="殯儀知識">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="殯儀知識, 帛金, 喪葬習俗, 香港殯儀, 喪禮禮儀" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <Container>
        <Header>殯儀知識</Header>
        <BlogCardsWrapper>
          {
            blogs && blogs.map(({ thumbnail, title }, idx) => (
              <BlogCard
                href={`/knowledges/${encodeURIComponent(title)}`}
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
  const filesInBlogs = fs.readdirSync('./_posts/blog/').filter(file => file.endsWith('.md'));

  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./_posts/blog/${filename}`, 'utf8');
    const matterData = matter(file);
    return JSON.parse(safeJsonStringify(matterData.data));
  });

  return {
    props: {
      blogs,
    },
  };
}

export default KnowledgesPage;
