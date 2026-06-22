import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { keytomic } from '../../lib/keytomic'
import styled from 'styled-components'

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`

const BlogTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`

const BlogCard = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const BlogContent = styled.div`
  padding: 20px;
`

const BlogExcerpt = styled.p`
  color: #666;
  font-size: 14px;
`

const ReadMore = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;
`

export default function BlogIndex({ blogs, hasMore, nextCursor }: any) {
  const router = useRouter();
  const canonicalUrl = `https://venusfuneralservice.com${router.asPath}`;

  return (
    <>
      <Head>
        <title>最新資訊與文章 | 金星殯儀服務</title>
        <meta name="description" content="瀏覽金星殯儀服務的最新資訊與文章" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogContainer>
        <BlogTitle>最新資訊與文章</BlogTitle>
        <BlogGrid>
          {blogs?.map((blog: any) => (
            <BlogCard key={blog.id}>
              {blog.coverImageUrl && <BlogImage src={blog.coverImageUrl} alt={blog.title} />}
              <BlogContent>
                <h3>{blog.title}</h3>
                <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                <Link href={`/knowledges/${blog.slug}`} passHref>
                  <ReadMore>閱讀更多</ReadMore>
                </Link>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = await keytomic.listBlogs(12);
    return {
      props: {
        blogs: result.data.data,
        hasMore: result.data.pageInfo.hasMore,
        nextCursor: result.data.pageInfo.nextCursor || null,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 60 seconds (you can adjust this number)
      revalidate: 60, 
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      props: {
        blogs: [],
        hasMore: false,
        nextCursor: null,
      },
      revalidate: 60,
    }
  }
}
