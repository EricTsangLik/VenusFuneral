import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import safeJsonStringify from 'safe-json-stringify'
import ReactMarkdown from 'react-markdown'
import KnowledgeDefaultLayout from '../../../components/layouts/KnowledgeDefaultLayout'

const MediaReport = ({ data }) => {
  const layoutData = {
    ...data.data,
    content: data.content
  };

  return (
    <KnowledgeDefaultLayout data={layoutData}>
      <ReactMarkdown>
        {data.content}
      </ReactMarkdown>
    </KnowledgeDefaultLayout>
  )
}

export async function getStaticProps({ params: { media } }) {
  const filesInMedia = fs.readdirSync('./_posts/media/')
  let data: any;
  
  for (const filename of filesInMedia) {
    const file = fs.readFileSync(`./_posts/media/${filename}`, 'utf8')

    if (file) {
      const matterData = matter(file)
      const decodedData = JSON.parse(safeJsonStringify(matterData))
      // Match by the filename without extension (e.g. 'singtao')
      if (filename.replace('.md', '') === decodeURIComponent(media)) {
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
  const filesInMedia = fs.readdirSync('./_posts/media/')

  const paths = filesInMedia.map((filename) => {
    return {
      params: {
        media: filename.replace('.md', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default MediaReport
