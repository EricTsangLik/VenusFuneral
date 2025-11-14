import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  PageLayout,
  Navbar,
  ServicePreviewCard,
  Container,
  MediaReportCarousel,
  transformCloundinaryImage,
  Text,
  Button,
} from '@venus-funeral/ui'
import {
  attributes,
  react as Content,
} from '../../../content/serviceOverviews.md'
import TestimonySlides from '../components/TestimonySlides'
import SellingPointsSection from '../components/SellingPointsSection'

const { services, sellPoints, banner, missions } = attributes

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
  position: absolute;
  width: 100%;
  justify-content: center;
  bottom: 4px;

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.h6};
  }

  & * {
    color: white;
    letter-spacing: 4px;
  }

  & > a {
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    bottom: 30px;

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

export function Index() {
  return (
    <PageLayout
      description={sellPoints[0].content}
    >
      <Container>
        <Banner>
          <BannerImage src={transformCloundinaryImage(banner, 1440)} />
          <BannerTextWrapper>
            <Button href="/services" variant="contained">
              查看服務
            </Button>
          </BannerTextWrapper>
        </Banner>
      </Container>
      <SellingPointsSection />
      <TestimonySlides />
      <MediaReportCarousel />
    </PageLayout>
  )
}

export default Index
