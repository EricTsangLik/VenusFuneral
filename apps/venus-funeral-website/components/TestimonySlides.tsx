import {
  Container,
  Header,
  ServicePreviewCard,
  TestimonyCard,
} from '@venus-funeral/ui';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import { attributes, react as Content } from '../../../content/testimonies.md';

const { testimonies } = attributes;

const Wrapper = styled.div<{ slideCount: number }>`
  background: ${({ theme }) => theme.colors.lightgold};
  width: 100%;
  padding: 40px 0;

  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 360px;
    height: 550px;
    filter: blur(1px);
    background: #f5dcbf;
    border-radius: 12px;
  }

  .swiper-slide-active {
    filter: blur(0px);
    background: #fff;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    background-image: none !important;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    .swiper-slide {
      width: 600px;
      height: 400px;
    }
  }
`;

const TestimonySlides: React.FC = () => {
  return (
    <Wrapper slideCount={testimonies && testimonies.length}>
      <Container>
        <Header whiteColor disableUnderline>
          客戶見證
        </Header>
      </Container>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
        // loop
      >
        {testimonies &&
          testimonies.map((it, idx) => (
            <SwiperSlide key={idx}>
              <TestimonyCard {...it} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  );
};

export default TestimonySlides;
