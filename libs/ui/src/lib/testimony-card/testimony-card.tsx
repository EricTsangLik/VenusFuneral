import styled from 'styled-components';
import { RiDoubleQuotesL } from 'react-icons/ri';
import Text from '../text/text';


/* eslint-disable-next-line */
export interface TestimonyCardProps {
  name?: string;
  content?: string;
}

const StyledTestimonyCard = styled.div`
  border-radius: 12px;
  padding: 24px 36px;
  height: 100%;

  & svg {
    fill: ${({theme}) => theme.colors.gold};
  }
`;

const CardWrapper = styled.div`
  height: 100%;

  & p {
    color: ${({theme}) => theme.colors.gray};
  }

  & blockquote {
    font-weight: lighter;
  }
`

const Author = styled(Text)`
  position: absolute;
  bottom: 24px;
  left: 0px;
  text-align: center;
  width: 100%;
  font-weight: bold;
`

export function TestimonyCard({
  name,
  content,
}: TestimonyCardProps) {
  return (
    <CardWrapper>
      <StyledTestimonyCard>
        <RiDoubleQuotesL fontSize={42} />
        <Text fontSize="h6" component="blockquote">
          {content}
        </Text>
        <Author fontSize="h4" component="div">{name}</Author>
      </StyledTestimonyCard>
    </CardWrapper>
  );
}

export default TestimonyCard;
