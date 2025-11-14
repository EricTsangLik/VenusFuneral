/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Container, Text } from '@venus-funeral/ui';
import { transformCloundinaryImage } from '@venus-funeral/ui';

interface FlowerGridGalleryProps {
  photoSrcs: any[];
  onClickImage: (index: number) => void;
}


const Wrapper = styled(Container)`
  margin-top: 32px;
  min-height: 400px;
  scroll-margin-top: 64px;

  img {
    height: auto;
    cursor: pointer;
    width: 100%;
  }
`

const FlowerCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  overflow: hidden ;
  width: 100%;
`;

const FlowerDescription = styled.div`
  display: flex;
  padding: 4px 12px 8px;
  justify-content: space-between;
  align-items: center;
`;

const internationalNumberFormat = new Intl.NumberFormat('en-US')

const FlowerGridGallery: React.FC<FlowerGridGalleryProps> = React.memo(
  ({
    photoSrcs,
    onClickImage,
  }) => {
    const clickImageHandler = (index: number) => () => {
      onClickImage(index)
    }

    return (
      <Wrapper>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, 600: 3 }}
        >
          <Masonry gutter="24px">
            {
              photoSrcs &&
              photoSrcs.map((it, idx) =>
                <FlowerCard key={idx}>
                  <img src={transformCloundinaryImage(it.src, 400)} key={idx} onClick={clickImageHandler(idx)} />
                  <FlowerDescription>
                    <Text color="default">{it.flowerName}</Text>
                    <Text color="default">${internationalNumberFormat.format(it.price)}</Text>
                  </FlowerDescription>
                </FlowerCard>
              )
            }
          </Masonry>
        </ResponsiveMasonry>
      </Wrapper>
    )
  }
)

export default FlowerGridGallery