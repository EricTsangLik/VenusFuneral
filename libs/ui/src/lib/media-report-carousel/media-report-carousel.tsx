import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper';
import Container from '../container/container';
import { attributes } from '../../../../../content/mediaReports.md';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { useState } from 'react';
import { idText } from 'typescript';
import IconButton from '../icon-button/icon-button';
import Text from '../text/text';

const { reports }: any = attributes;

/* eslint-disable-next-line */
export interface MediaReportCarouselProps {}

const StyledMediaReportCarousel = styled(Container)`
  overflow: visible;
  margin-top: 80px;

  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .swiper-slide-active {
    .report__header {
      transition: 200ms ease;
      opacity: 1 !important;
    }
  }

  .swiper-slide {
    .report__header {
      opacity: 0;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCard = styled.div`
  transition: 1s ease !important;
`;

const ButtonWrappers = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const StyledImage = styled.img`
  border-radius: 12px;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${({ theme }) => theme.breakPoints.tablet} {
    height: 300px;
    width: auto;
  }
`;

const StyledText = styled(Text)<{ active?: boolean }>`
  /* opacity: ${({ active }) => (active ? 1 : 0)};
  transition: 1s ease !important; */
  margin: 24px 0 32px;
  text-align: left;
`;

const StyledQuote = styled(Text)`
  margin-top: 40px;
  font-weight: lighter;
  text-align: left;
`;

const Header = styled(Text)`
  text-align: center;
  margin-top: 32px;
`

export const MediaReportCarousel = React.memo(() => {
  const [swiper, setSwiper] = useState<any>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [show, setShow] = useState(true);

  const swiperInitHandler = (swiper: any) => {
    setSwiper(swiper);
  };
  const clickPrevButtonHandler = () => {
    console.log(swiper);
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const clickNextButtonHandler = () => {
    console.log(swiper);
    if (swiper) {
      swiper.slideNext();
    }
  };

  const swiperIndexChangeHandler = (swiper: any) => {
    setShow(false);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
    <Header component="h6" fontSize="h3">傳媒報導</Header>
    <div style={{ overflow: 'hidden' }}>
      <StyledMediaReportCarousel>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          speed={600}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={swiperInitHandler}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
          }}
          // onActiveIndexChange={swiperIndexChangeHandler}
          onTransitionStart={swiperIndexChangeHandler}
          onTransitionEnd={() => setShow(true)}
        >
          {reports &&
            reports.map((it: any, idx: number) => (
              <SwiperSlide key={idx}>
                <StyledCard>
                  <a href={it.link} target="_blank" rel="noreferrer">
                    <StyledImage src={it.thumbnail} />
                  </a>
                  <StyledQuote fontSize="h6" component="p">
                    {reports[idx].quote}
                  </StyledQuote>
                  <StyledText fontSize="h4" component="div">
                    {reports[idx].header}
                  </StyledText>
                </StyledCard>
              </SwiperSlide>
            ))}
        </Swiper>
        <ButtonWrappers>
          <IconButton
            onClick={clickPrevButtonHandler}
            backgroundColor="lightgray"
            disabled={activeIndex === 0}
          >
            <MdKeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={clickNextButtonHandler}
            backgroundColor="lightgray"
            disabled={activeIndex === reports.length - 1}
          >
            <MdKeyboardArrowRight />
          </IconButton>
        </ButtonWrappers>
      </StyledMediaReportCarousel>
    </div>
    </>
  );
});

export default MediaReportCarousel;
