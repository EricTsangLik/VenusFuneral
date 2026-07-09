import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { listAllBlogs } from '../../lib/keytomic'
import styled from 'styled-components'

const PAGE_SIZE = 12

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

const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 48px;
`

const PageLink = styled.a<{ $active?: boolean; $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${({ $active }) => ($active ? '#B48650' : '#eaeaea')};
  border-radius: 4px;
  background: ${({ $active }) => ($active ? '#B48650' : '#fff')};
  color: ${({ $active, $disabled }) =>
    $disabled ? '#ccc' : $active ? '#fff' : '#333'};
  text-decoration: none;
  font-size: 14px;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  transition: border-color 0.2s, background 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ $disabled }) => ($disabled ? '#eaeaea' : '#B48650')};
    color: ${({ $active, $disabled }) =>
      $disabled ? '#ccc' : $active ? '#fff' : '#B48650'};
  }
`

const Ellipsis = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: #999;
`

function getPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const pages: (number | 'ellipsis')[] = [1]

  if (currentPage > 3) {
    pages.push('ellipsis')
  }

  const start = Math.max(2, currentPage - 1)
  const end = Math.min(totalPages - 1, currentPage + 1)

  for (let page = start; page <= end; page += 1) {
    pages.push(page)
  }

  if (currentPage < totalPages - 2) {
    pages.push('ellipsis')
  }

  pages.push(totalPages)
  return pages
}

function getPageHref(page: number) {
  return page <= 1 ? '/knowledges' : `/knowledges?page=${page}`
}

export default function BlogIndex({
  blogs,
  currentPage,
  totalPages,
}: {
  blogs: any[]
  currentPage: number
  totalPages: number
}) {
  const canonicalPath =
    currentPage <= 1 ? '/knowledges' : `/knowledges?page=${currentPage}`
  const canonicalUrl = `https://venusfuneralservice.com${canonicalPath}`
  const pageNumbers = getPageNumbers(currentPage, totalPages)
  const hasPrev = currentPage > 1
  const hasNext = currentPage < totalPages

  return (
    <>
      <Head>
        <title>
          {currentPage > 1
            ? `最新資訊與文章 - 第 ${currentPage} 頁 | 金星殯儀服務`
            : '最新資訊與文章 | 金星殯儀服務'}
        </title>
        <meta name="description" content="瀏覽金星殯儀服務的最新資訊與文章" />
        <link rel="canonical" href={canonicalUrl} />
        {hasPrev && (
          <link rel="prev" href={`https://venusfuneralservice.com${getPageHref(currentPage - 1)}`} />
        )}
        {hasNext && (
          <link rel="next" href={`https://venusfuneralservice.com${getPageHref(currentPage + 1)}`} />
        )}
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

        {totalPages > 1 && (
          <Pagination aria-label="文章分頁">
            {hasPrev ? (
              <Link href={getPageHref(currentPage - 1)} passHref>
                <PageLink>上一頁</PageLink>
              </Link>
            ) : (
              <PageLink as="span" $disabled>
                上一頁
              </PageLink>
            )}

            {pageNumbers.map((page, index) =>
              page === 'ellipsis' ? (
                <Ellipsis key={`ellipsis-${index}`}>…</Ellipsis>
              ) : (
                <Link key={page} href={getPageHref(page)} passHref>
                  <PageLink $active={page === currentPage} aria-current={page === currentPage ? 'page' : undefined}>
                    {page}
                  </PageLink>
                </Link>
              )
            )}

            {hasNext ? (
              <Link href={getPageHref(currentPage + 1)} passHref>
                <PageLink>下一頁</PageLink>
              </Link>
            ) : (
              <PageLink as="span" $disabled>
                下一頁
              </PageLink>
            )}
          </Pagination>
        )}
      </BlogContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const rawPage = Number(context.query.page)
  const requestedPage = Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1

  try {
    const allBlogs = await listAllBlogs()
    const totalPages = Math.max(1, Math.ceil(allBlogs.length / PAGE_SIZE))
    const currentPage = Math.min(requestedPage, totalPages)
    const start = (currentPage - 1) * PAGE_SIZE
    const blogs = allBlogs.slice(start, start + PAGE_SIZE)

    if (requestedPage !== currentPage) {
      return {
        redirect: {
          destination: getPageHref(currentPage),
          permanent: false,
        },
      }
    }

    return {
      props: {
        blogs,
        currentPage,
        totalPages,
      },
    }
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return {
      props: {
        blogs: [],
        currentPage: 1,
        totalPages: 1,
      },
    }
  }
}
