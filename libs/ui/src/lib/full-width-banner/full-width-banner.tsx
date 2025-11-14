import styled from 'styled-components';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface FullWidthBannerProps {
  imageSrc?: string;
}

const StyledFullWidthBanner = styled.div`
  display: flex;
  background: white;
  width: 100%;
  flex-direction: column-reverse;
  
  ${({ theme }) => theme.breakPoints.tablet} {
    height: 735px;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.lightgold};
  }
`;

const BannerImage = styled.img`
  width: 100%;

  ${({ theme }) => theme.breakPoints.tablet} {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const ImageWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakPoints.tablet} {
    width: 50%;
  }
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.default};
  transform: translateY(-30px);
  border-radius: 12px;
  background: white;

  ${({ theme }) => theme.breakPoints.tablet} {
    width: 50%;
    transform: translateY(0px);
    border-radius: 0px;
    background: none;
    color: white;
  }
`

export function FullWidthBanner({
  imageSrc,
  children
}: PropsWithChildren<FullWidthBannerProps>) {
  return (
    <StyledFullWidthBanner>
      <TextContainer>
        {children}
      </TextContainer>
      <ImageWrapper>
        <BannerImage src={imageSrc} alt="banner image" />
      </ImageWrapper>
    </StyledFullWidthBanner>
  );
}

export default FullWidthBanner;
