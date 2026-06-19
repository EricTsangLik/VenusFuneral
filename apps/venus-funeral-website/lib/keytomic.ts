import {
  getHealth,
  listBlogs,
  getBlogById,
  getBlogBySlug,
  type GetHealthResult,
  type ListBlogsResult,
  type GetBlogByIdResult,
  type GetBlogBySlugResult,
} from '@keytomic/sdk'

const getHeaders = () => {
  if (!process.env.KEYTOMIC_API_KEY) {
    console.warn('KEYTOMIC_API_KEY is not defined. Please set it in your environment variables.');
  }
  return {
    Authorization: `Bearer ${process.env.KEYTOMIC_API_KEY || ''}`,
  }
}

export const keytomic = {
  getHealth: (): Promise<GetHealthResult> => {
    return getHealth({ headers: getHeaders() })
  },
  listBlogs: (limit?: number, cursor?: string): Promise<ListBlogsResult> => {
    return listBlogs({
      query: { limit, cursor },
      headers: getHeaders(),
    })
  },
  getBlogById: (id: string): Promise<GetBlogByIdResult> => {
    return getBlogById({
      path: { id },
      headers: getHeaders(),
    })
  },
  getBlogBySlug: async (slug: string) => {
    try {
      const detailRes = await getBlogBySlug({
        query: { slug },
        headers: getHeaders(),
      })
      return detailRes.data.data
    } catch (err: any) {
      if (err?.response?.status === 404) return null
      throw err
    }
  },
}

export async function getAllKeytomicBlogsForSitemap() {
  let allBlogs: any[] = []
  let cursor: string | undefined = undefined
  let hasMore = true

  while (hasMore) {
    try {
      const result = await keytomic.listBlogs(50, cursor)
      const blogs = result.data.data
      const pageInfo = result.data.pageInfo
      
      allBlogs = [...allBlogs, ...blogs]
      hasMore = pageInfo.hasMore
      cursor = pageInfo.nextCursor || undefined
    } catch (error) {
      console.error('Error fetching blogs for sitemap:', error)
      break
    }
  }

  return allBlogs.map((blog) => ({
    slug: blog.slug,
    updatedAt: blog.updatedAt,
    publishedAt: blog.publishedAt,
    createdAt: blog.createdAt,
  }))
}
