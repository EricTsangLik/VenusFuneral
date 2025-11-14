import { Container, MediaReportCarousel, PageLayout, Text, TextBanner } from '@venus-funeral/ui'
import { NextPage } from 'next'
import Fade from 'react-reveal/Fade'
import styled, { keyframes } from 'styled-components'
import { attributes } from '../../../../content/aboutus.md'

console.log(attributes)

const { companyIntro, founderIntro, mediaReports, missions } = attributes

const expand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 95px;
  }
`

const StyledHeader = styled(Text)<{ disableUnderline?: boolean }>`
  margin-bottom: 0;
  position: relative;
  margin-bottom: 52px;

  &:after {
    display: ${({ disableUnderline }) => (disableUnderline ? 'none' : 'block')};
    position: absolute;
    height: 4px;
    width: 0;
    bottom: -24px;
    left: 0%;
    content: '';
    background: ${({ theme }) => theme.colors.gold};
    border-radius: 4px;
    animation: 0.5s ${expand} ease-out;
    animation-delay: 1200ms;
    animation-fill-mode: forwards;
  }
`

const OwnerImage = styled.img`
  border-radius: 8px;
  width: 100%;
  margin-bottom: 60px;
  height: auto;
  z-index: 10;
  object-fit: cover;

  ${({ theme }) => theme.breakPoints.tablet} {
    width: 45%;
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 35%;
  }
`

const OwnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
  }
`

const OwnerTextWrapper = styled.div`
  padding: 0;
  border-radius: 8px;
  color: white;
  letter-spacing: 1.05px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  line-height: 180%;

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 40px 36px;
  }
`

const OutterWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightgold};
  padding: 100px 0;

  ${({ theme }) => theme.breakPoints.tablet} {
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    margin-top: 160px;
  }
`

const AboutusPage: NextPage = () => {
  console.log('mount')
  return (
    <PageLayout title="關於我們" description={companyIntro}>
      <TextBanner
        header="我們的故事"
        content={companyIntro}
        imageSrc="https://res.cloudinary.com/djblau8at/image/upload/v1658782388/7c038caa-8032-4cd0-ab89-7efac220f4a2_wpvbdt.jpg"
      />
      <Fade delay={600}>
        <OutterWrapper>
          <OwnerContainer>
            <OwnerImage src="https://res.cloudinary.com/djblau8at/image/upload/v1763100154/%E5%89%B5%E8%BE%A6%E4%BA%BA%E8%BD%89%E5%B0%81%E9%9D%A2_cxbxus.jpg" alt="Owner Image" />
            <OwnerTextWrapper>
              <StyledHeader
                disableUnderline
                component="h6"
                fontSize="h3"
                color="inherit"
              >
                創辦人
              </StyledHeader>
              <Text component="p" fontSize="body1" color="inherit">
                {founderIntro}
              </Text>
            </OwnerTextWrapper>
          </OwnerContainer>
        </OutterWrapper>
      </Fade>
      <MediaReportCarousel/>
    </PageLayout>
  )
}

export default AboutusPage
