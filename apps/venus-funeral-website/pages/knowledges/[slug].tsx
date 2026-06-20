import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { keytomic, getAllKeytomicBlogsForSitemap } from '../../lib/keytomic'
import styled from 'styled-components'

const ArticleContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const CoverImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 30px;
`

export default function BlogPost({ blog, siteUrl }: any) {
  if (!blog) {
    return <h1>Post Not Found</h1>
  }

  const url = `${siteUrl}/knowledges/${blog.slug}`
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImageUrl,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
  }

  return (
    <>
      <Head>
        <title>{blog.seo?.metaTitle || blog.title}</title>
        <meta name="description" content={blog.seo?.metaDescription || blog.excerpt || ''} />
        <link rel="canonical" href={blog.seo?.canonicalUrl || url} />
        
        <meta property="og:title" content={blog.seo?.metaTitle || blog.title} />
        <meta property="og:description" content={blog.seo?.metaDescription || blog.excerpt || ''} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog.publishedAt} />
        <meta property="article:modified_time" content={blog.updatedAt} />
        {blog.coverImageUrl && <meta property="og:image" content={blog.coverImageUrl} />}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>
      
      <ArticleContainer>
        <Title className="blog-title h1">{blog.title}</Title>
        {blog.coverImageUrl && <CoverImage src={blog.coverImageUrl} alt={blog.title} />}
        
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.html }} />
      </ArticleContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const blogs = await getAllKeytomicBlogsForSitemap()
    const paths = blogs.map((blog) => ({
      params: { slug: blog.slug },
    }))

    return {
      paths,
      fallback: "blocking",
    }
  } catch (error) {
    console.error('Error fetching blog paths:', error)
    return {
      paths: [],
      fallback: "blocking",
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  
  try {
    const blog = await keytomic.getBlogBySlug(slug)
    
    if (!blog) {
      return {
        notFound: true,
      }
    }
    
    return {
      props: {
        blog,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.venusfuneralservice.com',
      }
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return {
      notFound: true,
    }
  }
}
