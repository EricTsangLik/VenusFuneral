import { Container, Header, PageLayout, BlogCard } from '@venus-funeral/ui';
import { NextPage } from 'next';
import styled from 'styled-components';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import safeJsonStringify from 'safe-json-stringify';

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
  console.log('blogs', blogs);
  return (
    <PageLayout title="殯儀知識">
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
  const filesInBlogs = fs.readdirSync('./_posts/blog/');

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
