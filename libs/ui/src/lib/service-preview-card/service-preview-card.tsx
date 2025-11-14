import Link from 'next/link';
import styled from 'styled-components';
import Text from '../text/text';
import { transformCloundinaryImage } from '../../utils/transformCloundinaryImage';

/* eslint-disable-next-line */
export interface ServicePreviewCardProps {
  thumbnail: string;
  serviceName: string;
}

const StyledServicePreviewCard = styled.div<Partial<ServicePreviewCardProps>>`
  background-size: auto;
  background-color: #5a5a5a;
  background-image: url(${props => props.thumbnail});
  background-blend-mode: overlay;
  background-position: center ;
  background-repeat: no-repeat ;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: 300ms ease-out;
  height: 150px;

  ${({ theme }) => theme.breakPoints.desktop} {
    height: 160px;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    height: 130px;
    background-size: 100%;

    &:hover {
    background-size: 120%;
    transition: 300ms ease-out;
  }
  }
`;

const StyledText = styled(Text)`
  /* font-weight: lighter; */
  position: absolute;
  text-align: center ;
  width: 100%;
  left: 0;
  bottom: 20px;
  letter-spacing: 4px;
  pointer-events: none;
`

export function ServicePreviewCard({
  thumbnail,
  serviceName,
}: ServicePreviewCardProps) {
  return (
    <Link href={`/services/${serviceName}`}>
      <a>
        <StyledServicePreviewCard thumbnail={transformCloundinaryImage(thumbnail, 400)}>
          <StyledText color="white" fontSize="h5" component="label">
            {serviceName}
          </StyledText>
        </StyledServicePreviewCard>
      </a>
    </Link>
  );
}

export default ServicePreviewCard;
