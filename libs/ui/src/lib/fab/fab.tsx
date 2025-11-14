import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FabProps {}

const StyledFab = styled.a`
  color: pink;
`;

export function Fab(props: FabProps) {
  return (
    <StyledFab>
      <h1>Welcome to Fab!</h1>
    </StyledFab>
  );
}

export default Fab;
