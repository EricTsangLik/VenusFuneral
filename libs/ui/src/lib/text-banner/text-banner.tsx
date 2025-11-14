import styled, { keyframes } from 'styled-components';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Text from '../text/text';
import Container from '../container/container';

/* eslint-disable-next-line */
export interface TextBannerProps {
  header?: string;
  content?: string;
  imageSrc?: string;
}

const StyledBannerWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  /* justify-content: flex-end; */

  /* & .react-reveal {
    height: 100%;
  } */
  
  ${({ theme }) => theme.breakPoints.desktop} {
    justify-content: flex-end;
    flex-direction: row;
    max-height: 600px;
    height: 600px;
  }
`

const OurStoryWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 40px 0;
  display: flex;
  z-index: 100;
  display: flex;
  align-items: flex-start ;
  transform: translateY(-64px);
  padding: 0 24px;

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 45%;
    left: 0;
    top: 0;
    align-items: center ;
    position: absolute;
    padding: 0;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  max-height: 400px;
  
  ${({ theme }) => theme.breakPoints.desktop} {
    max-height: unset;
  }
`

const ImageWrapper = styled.div`
  width: 100%;

  & .react-reveal {
    height: 100%;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 75%;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  box-shadow: 0 6px 20px rgb(0 0 0 / 20%);
  border-radius: 8px;
  width: 100%;
  height: auto;
  padding: 40px 24px;
  letter-spacing: 1.05px ;
  line-height: 180% ;

  & > p {
    white-space: pre-wrap;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    padding: 40px 42px;
  }
`

const expand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 95px;
  }
`

const StyledHeader = styled(Text) <{ disableUnderline?: boolean }>`
  margin-bottom: 0;
  position: relative;
  margin-bottom: 52px;
  line-height: ${({theme}) => theme.fontSize.h2};

  &:after {
    display: ${({ disableUnderline }) => disableUnderline ? 'none' : 'block'};
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
    animation-fill-mode: forwards
  }
`

export function TextBanner({
  header,
  content,
  imageSrc,
}: TextBannerProps) {
  return (
    <Container>
      <StyledBannerWrapper>
        <OurStoryWrapper>
          <Slide left delay={500}>
            <Fade delay={500}>
              <TextWrapper>
                <StyledHeader component="h6" fontSize="h3">{header}</StyledHeader>
              <Text component="p" fontSize="subtitle">{content}</Text>
              </TextWrapper>
            </Fade>
          </Slide>
        </OurStoryWrapper>
        <ImageWrapper>
          <Fade>
            <BannerImage src={imageSrc} alt="banner image" />
          </Fade>
        </ImageWrapper>
      </StyledBannerWrapper>
    </Container>
  );
}

export default TextBanner;
