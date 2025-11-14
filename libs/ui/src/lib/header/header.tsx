import styled, { keyframes } from 'styled-components';
import { PropsWithChildren } from 'react';
import Text from '../text/text';

/* eslint-disable-next-line */
export interface HeaderProps {
  className?: string;
  component?: 'h6' | 'h1'
  disableUnderline?: boolean;
  whiteColor?: boolean;
}

const expand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 95px;
  }
`

const StyledHeader = styled(Text) <{ disableUnderline?: boolean, whiteColor?: boolean; }>`
  margin-bottom: 0;
  position: relative;
  margin-bottom: 80px;
  color: ${({whiteColor}) => whiteColor ? '#fff' : 'inherit'} !important;

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

export function Header({
  className,
  children,
  component = 'h6',
  disableUnderline,
  whiteColor
}: PropsWithChildren<HeaderProps>) {
  return (
    <StyledHeader
      className={className}
      disableUnderline={disableUnderline}
      component={component}
      whiteColor={whiteColor}
      fontSize="h2"
    >
      {children}
    </StyledHeader>
  );
}

export default Header;
