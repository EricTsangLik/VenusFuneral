import { useState } from 'react';
import styled from 'styled-components';
import { MdMenu, MdOutlineClose } from 'react-icons/md'
import Link from 'next/link';
import { navItems } from '../navbar/navbar';

/* eslint-disable-next-line */
export interface MobileMenuProps { }

const StyledMobileMenuWrapper = styled.div`
  position: relative;

  ${({ theme }) => theme.breakPoints.tablet} {
    display: none;
  }
`;

const Menu = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 96px;
  left: 0;
  width: 100%;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(calc(-100% - 96px))'};
  background: ${({ theme }) => theme.colors.gold};
  display: flex;
  flex-direction: column;
  transition: 225ms ease;
  z-index: -1;
`

const MenuButton = styled.button<{ open?: boolean }>`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.default};
  padding: 0;
`

const StyledLink = styled.a`
  color: white;
  text-align: center;
  padding: 16px 0;
`

export function MobileMenu(props: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const clickMenuHandler = () => {
    setOpen(!open)
  }

  const clickMenuItemHandler = () => {
    console.log('click')
    setOpen(false)
  }

  return (
    <StyledMobileMenuWrapper>
      <MenuButton
        onClick={clickMenuHandler}
      >
        {
          open ? <MdOutlineClose /> : <MdMenu />
        }
      </MenuButton>
      <Menu open={open}>
        {
          navItems &&
          navItems.map(({ label, href }) => (
            <Link href={href} key={href} passHref>
              <StyledLink onClick={clickMenuItemHandler}>{label}</StyledLink>
            </Link>
          ))
        }
      </Menu>
    </StyledMobileMenuWrapper>
  );
}

export default MobileMenu;
