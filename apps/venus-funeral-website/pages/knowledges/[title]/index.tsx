import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import safeJsonStringify from 'safe-json-stringify'
import ReactMarkdown from 'react-markdown'
import KnowledgeDefaultLayout from '../../../components/layouts/KnowledgeDefaultLayout'
import KnowledgePremiumLayout from '../../../components/layouts/KnowledgePremiumLayout'
import KnowledgeVideoLayout from '../../../components/layouts/KnowledgeVideoLayout'

const KnowledgeBlog = ({ data }) => {
  const layoutTemplate = data.data.layout || 'default';

  // Combine data.data and data.content for the layout components
  const layoutData = {
    ...data.data,
    content: data.content
  };

  const renderContent = () => (
    <ReactMarkdown>
      {data.content}
    </ReactMarkdown>
  );

  switch (layoutTemplate) {
    case 'premium':
      return (
        <KnowledgePremiumLayout data={layoutData}>
          {renderContent()}
        </KnowledgePremiumLayout>
      );
    case 'video':
      return (
        <KnowledgeVideoLayout data={layoutData}>
          {renderContent()}
        </KnowledgeVideoLayout>
      );
    default:
      return (
        <KnowledgeDefaultLayout data={layoutData}>
          {renderContent()}
        </KnowledgeDefaultLayout>
      );
  }
}

export async function getStaticProps({ params: { title } }) {
  const filesInBlogs = fs.readdirSync('./_posts/blog/').filter(file => file.endsWith('.md'))
  let data: any;
  for (const filename of filesInBlogs) {
    const file = fs.readFileSync(`./_posts/blog/${filename}`, 'utf8')

    if (file) {
      const matterData = matter(file)
      const decodedData = JSON.parse(safeJsonStringify(matterData))
      if (decodedData && decodedData.data && decodedData.data.title === decodeURIComponent(title)) {
        data = decodedData
        break
      }
    }
  }

  return {
    props: {
      data,
    }
  }
}

export async function getStaticPaths() {
  const filesInBlogs = fs.readdirSync('./_posts/blog/').filter(file => file.endsWith('.md'))

  const paths = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./_posts/blog/${filename}`, 'utf8')
    const matterData = matter(file)
    return {
      params: {
        title: JSON.parse(safeJsonStringify(matterData.data)).title,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default KnowledgeBlog
