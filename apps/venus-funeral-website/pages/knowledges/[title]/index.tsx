import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import safeJsonStringify from 'safe-json-stringify'
import { Container, PageLayout, Text, transformCloundinaryImage } from '@venus-funeral/ui'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

const BannerImage = styled.img`
  border-radius: 12px;
  width: 100%;
  /* max-height: 400px; */
  margin: 0 auto;
  display: block;
  object-fit: contain;
  margin-bottom: 42px;
  margin-top: 42px;
`

const Date = styled(Text)`
  margin-top: 12px;
  color: gray;
  font-weight: lighter;
`

const ContentWrapper = styled.div`
  margin-top: 80px;

  p {
    font-size: ${({ theme }) => theme.fontSize.subtitle};
  } 
`

const ContentContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
`

const KnowledgeBlog = ({ data }) => {
  console.log(data)
  return (
    <PageLayout
      title={data.data.title}
      description={data.content}
      thumbnail={transformCloundinaryImage(data.data.thumbnail, 720)}
    >
      <ContentContainer>
        <Text fontSize="h3" component="h1" bold>{data.data.title}</Text>
        <Date fontSize="body1" component="div">
          <Moment format="DD-MM-YYYY">
            {data.data.date}
          </Moment>
        </Date>
        <BannerImage
          src={transformCloundinaryImage(data.data.thumbnail, 1200)}
          alt="Banner Image"
        />
        <ContentWrapper>
          <ReactMarkdown>
            {data.content}
          </ReactMarkdown>
        </ContentWrapper>
      </ContentContainer>
    </PageLayout>
  )
}

export async function getStaticProps({ params: { title } }) {
  const filesInBlogs = fs.readdirSync('./_posts/blog/')
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

  // const file = fs.readFileSync(`./_posts/blog/${decodeURIComponent(title)}.md`, 'utf8')
  // let data;
  // if (file) {
  //   data = matter(file)
  // }

  // return {
  //   props: {
  //     data: JSON.parse(safeJsonStringify(data)),
  //   },
  // }
}

export async function getStaticPaths() {
  const filesInBlogs = fs.readdirSync('./_posts/blog/')

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
