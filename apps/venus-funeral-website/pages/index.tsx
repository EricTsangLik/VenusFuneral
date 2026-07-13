import styled from 'styled-components'
import {
  PageLayout,
  Container,
  MediaReportCarousel,
  transformCloundinaryImage,
  Text,
  Button,
} from '@venus-funeral/ui'
import { attributes } from '../../../content/serviceOverviews.md'
import TestimonySlides from '../components/TestimonySlides'
import SellingPointsSection from '../components/SellingPointsSection'

const { banner } = attributes

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 140px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Banner = styled.div`
  max-height: 650px;
  width: 100%;
  position: relative;
  border-radius: 12px;
  margin-bottom: 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 80px;
  }
`

const BannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  width: 100%;
  justify-content: center;
  bottom: 4px;

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.h6};
    margin: 0;
    text-align: center;
  }

  & * {
    color: white;
    letter-spacing: 4px;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    bottom: 30px;
    gap: 24px;

    & h1 {
      font-size: ${({ theme }) => theme.fontSize.h3};
    }
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    & h1 {
      font-size: ${({ theme }) => theme.fontSize.h2};
    }
  }
`

const BannerImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export function Index({ reports = [] }: any) {
  return (
    <PageLayout
      seoTitle="金星殯儀 | 香港一站式殯儀服務、喪禮安排及文件代辦"
      description="金星殯儀提供香港一站式殯儀服務，涵蓋喪禮安排、文件代辦、火化土葬及哀傷支援，由經驗豐富的專人協助家屬妥善處理身後事每一個步驟，讓您更放心安心。"
    >
      <Container>
        <Banner>
          <BannerImage src={transformCloundinaryImage(banner, 1440)} alt="金星殯儀服務" />
          <BannerTextWrapper>

            <Button href="/services" variant="contained">
              查看服務
            </Button>
          </BannerTextWrapper>
        </Banner>
      </Container>
      <SellingPointsSection />
      <TestimonySlides />
      <MediaReportCarousel reports={reports} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const fs = require('fs')
  const matter = require('gray-matter')
  const safeJsonStringify = require('safe-json-stringify')

  const filesInMedia = fs.readdirSync('./_posts/media/').filter(file => file.endsWith('.md'))
  const reports = filesInMedia.map((filename: string) => {
    const file = fs.readFileSync(`./_posts/media/${filename}`, 'utf8')
    const matterData = matter(file)
    return JSON.parse(safeJsonStringify(matterData.data))
  })

  return {
    props: {
      reports,
    },
  }
}

export default Index
