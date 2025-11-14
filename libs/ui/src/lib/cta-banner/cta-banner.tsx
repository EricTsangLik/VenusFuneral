import styled from 'styled-components';
import Button from '../button/button';
import Container from '../container/container';
import Text from '../text/text';

/* eslint-disable-next-line */
export interface CtaBannerProps {}

const StyledCtaBanner = styled.div`
  background: ${({ theme }) => theme.colors.lightgray};
  margin-top: 40px;
  padding: 32px 0;

  ${({theme}) => theme.breakPoints.tablet} {
    margin-top: 80px
  }
`;

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  ${({theme}) => theme.breakPoints.tablet} {
    flex-direction: row;
    gap: 32px;
  }
`

export function CtaBanner(props: CtaBannerProps) {
  return (
    <StyledCtaBanner>
      <StyledContainer>
        <Text component="h6" fontSize="h5">立即聯絡我們 了解更多</Text>
        <Button href="/contact">
        聯絡我們
        </Button>
      </StyledContainer>
    </StyledCtaBanner>
  );
}

export default CtaBanner;
