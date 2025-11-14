import { PropsWithChildren } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContainerProps {
  className?: string;
  id?: string;
}

const StyledContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export function Container({
  children,
  className,
  id,
}: PropsWithChildren<ContainerProps>) {
  return (
    <StyledContainer className={className} id={id}>
      {children}
    </StyledContainer>
  );
}

export default Container;
