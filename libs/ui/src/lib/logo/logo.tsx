import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

/* eslint-disable-next-line */
export interface LogoProps {
  className?: string;
}

const StyledLogo = styled.div`
  /* height: 100%; */
  width: 200px;
  height: 96px;
  display: flex;
  align-items: center;

  svg {
    width: auto;
    height: 64px;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    width: 300px;
  }
`;

export function Logo({ className }: LogoProps) {
  return (
    <StyledLogo className={className}>
      <LogoIcon />
    </StyledLogo>
  );
}

export default Logo;
