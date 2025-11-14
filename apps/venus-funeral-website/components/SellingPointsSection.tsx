import {
  Container,
  Text,
  Button,
  transformCloundinaryImage,
} from '@venus-funeral/ui';
import styled from 'styled-components';
import { attributes } from '../../../content/serviceOverviews.md';

const { sellPoints } = attributes;

const StyledContainer = styled(Container)`
  margin-top: 0px;
  padding: 40px 20px 60px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-top: 80px;
    padding: 80px 20px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const PointCard = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 12px;
  overflow: hidden;
  background: white;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  padding: 12px 24px;
  h6 {
    margin-bottom: 12px;
  }
`;

const PointCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 20px;
  margin-bottom: 42px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SellingPointsSection: React.FC = () => {
  return (
    <div style={{ background: '#f3f3f3' }}>
      <StyledContainer>
        <PointCardWrapper>
          {sellPoints &&
            sellPoints.map(({ header, content, image }, idx) => (
              <PointCard key={idx}>
                <img src={transformCloundinaryImage(image, 600)} alt="photo" />
                <TextWrapper>
                  <Text component="h6" fontSize="h5">
                    {header}
                  </Text>
                  <Text component="p" fontSize="subtitle">
                    {content}
                  </Text>
                </TextWrapper>
              </PointCard>
            ))}
        </PointCardWrapper>
        <ButtonWrapper>
          <Button href="/processes">了解更多服務流程</Button>
        </ButtonWrapper>
      </StyledContainer>
    </div>
  );
};

export default SellingPointsSection;
