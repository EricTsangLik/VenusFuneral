/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from "react";
import { Container, PageLayout, Text, transformCloundinaryImage, Tabs, Tab, FullWidthBanner, Button } from "@venus-funeral/ui"
import { NextPage } from "next/types"
import styled from 'styled-components'
import FlowerGridGallery from '../../components/FlowerGridGallery'
// import optional lightbox plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { attributes } from '../../../../content/flowerService.md'

const {
  bannerImage,
  description,
  serviceKeyPoints,
  services,
} = attributes

const KeyPointNode = styled.div`
${({ theme }) => `
  background: ${theme.colors.lightgray};
  border-radius: 8px;
  height: 50px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.05px;
`}
`

const KeyPointNodesWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 16px 0 64px;
  justify-content: center;
  gap: 12px;
  flex-direction: column;

  ${({ theme }) => theme.breakPoints.desktop} {
    flex-direction: row;
    margin: 64px 0;
  }
`

const BannerTextWrapper = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;

  h1 {
    margin-bottom: 24px;
  }

  p {
    letter-spacing: 1.05px;
  }

  a {
    margin-top: 48px;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    max-width: 600px;
    padding: 24px;
    max-width: 500px;
  }
`

const breakpoints = [600, 1200]

const photos = services.map(({
  thumbnail,
  flowerName,
  tier,
  price,
}, index) => {
  const width = 1920;
  const height = 1080;
  return {
    src: thumbnail,
    key: `${index}`,
    width,
    height,
    tier,
    flowerName,
    price,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: thumbnail,
        width: breakpoint,
        height: breakpointHeight,
        tier,
      };
    })
  };
});

const StyledTabs = styled(Tabs)`
  scroll-margin-top: 100px;
`

const slides = photos.map(({
  src, width, height, images, tier, flowerName, price
}) => ({
  src,
  tier,
  flowerName,
  price,
  aspectRatio: width / height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
  })),
}))

const SubHeaderContainer = styled(Container)`
  text-align: center;
  margin-bottom: 24px;
`

const tiers = ['全部(All)', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const FlowerPage: NextPage = () => {
  const [index, setIndex] = useState(-1);
  const [selectedTier, setSelectedTier] = useState(tiers[0])
  const [displaySlides, setDisplaySlides] = useState(slides)
  const [filteredImageSrcs, setFilteredImageSrcs] = useState<any[]>([])

  useEffect(() => {
    if (selectedTier === tiers[0]) {
      setDisplaySlides(slides)
    } else {
      setDisplaySlides(slides.filter(it => it.tier === selectedTier))
    }
  }, [selectedTier])

  useEffect(() => {
    if (displaySlides) {
      setFilteredImageSrcs(displaySlides.map(({ src, flowerName, price }) => ({ src, flowerName, price })))
    }
  }, [displaySlides])

  const clickGallerImageHandler = useCallback((index: number) => {
    setIndex(index)
  }, [])

  const closeLightBoxHandler = () => {
    setIndex(-1)
  }

  const changeSelectedTabHandler = (index: number) => {
    const match = tiers.find((it, idx) => idx === index)

    if (match) {
      setSelectedTier(match)
    }
  }

  return (
    <PageLayout
      title="帛事花牌"
      description={description}
      thumbnail={transformCloundinaryImage(bannerImage, 500)}
    >
      <FullWidthBanner
        imageSrc={transformCloundinaryImage(bannerImage, 891)}
      >
        <BannerTextWrapper>
          <Text fontSize="h2" component="h1" color="inherit">帛事花牌</Text>
          <Text fontSize="h6" component="p" color="inherit">{description}</Text>
          <Button href="/flowers#list" variant="contained">查看花牌</Button>
        </BannerTextWrapper>
      </FullWidthBanner>
      <KeyPointNodesWrapper>
        {
          serviceKeyPoints && serviceKeyPoints.map(({ keyPoint }, idx) => (
            <KeyPointNode key={idx}>
              <Text fontSize="body1" color="default" bold>
                {keyPoint}
              </Text>
            </KeyPointNode>
          ))
        }
      </KeyPointNodesWrapper>
      <SubHeaderContainer>
        <Text fontSize="h3" component="h6">自選指定款式</Text>
      </SubHeaderContainer>
      <StyledTabs onChange={changeSelectedTabHandler} id="list">
        {
          tiers && tiers.map((it, idx) => (
            <Tab key={idx}>
              {it}
            </Tab>
          ))
        }
      </StyledTabs>
      <FlowerGridGallery
        photoSrcs={filteredImageSrcs}
        onClickImage={clickGallerImageHandler}
      />
      <Container>
        <Lightbox
          slides={displaySlides}
          open={index >= 0}
          index={index}
          close={closeLightBoxHandler}
          plugins={[Fullscreen, Slideshow, Thumbnails]}
        />
      </Container>
    </PageLayout>
  )
}

export default FlowerPage
