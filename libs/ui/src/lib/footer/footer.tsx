/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import Container from '../container/container'
import Link from 'next/link'
import Logo from '../logo/logo'
import CtaBanner from '../cta-banner/cta-banner'
import { navItems } from '../navbar/navbar'
import {
  MdOutlineFacebook,
} from 'react-icons/md'
import { attributes } from '../../../../../content/contactus.md'

const { facebookLink } = attributes

/* eslint-disable-next-line */
export interface FooterProps {
  disableCta?: boolean;
}

const StyledFooter = styled.div<FooterProps>`
  background: ${(props) => props.theme.colors.khaki};
  width: 100%;
  color: white;
  padding: 40px 0;
  margin-top: ${({ disableCta }) => (disableCta ? 80 : 0)}px;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: start;
  justify-content: flex-start;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: column;
    gap: 8px;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  flex-direction: column;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  ${({ theme }) => theme.breakPoints.tablet} {
    align-items: flex-end;
    margin-top: 0%;
  }
`

const BottomLogo = styled(Logo)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 72px;
`

const StyledP = styled.p`
  font-size: ${(props) => props.theme.fontSize.body2};
`

const navItemsFirstRow = navItems

const navItemsSecondRow = [
  { label: 'Facebook', href: process.env['facebookUrl'] as string },
]

export function Footer({ disableCta }: FooterProps) {
  return (
    <>
      {!disableCta && <CtaBanner />}
      <StyledFooter disableCta={disableCta}>
        <StyledContainer>
          <LinksContainer>
            <LinksWrapper>
              <h4>金星殯儀</h4>
              {navItemsFirstRow &&
                navItemsFirstRow.map(({ label, href }, idx) => (
                  <Link href={href} key={idx} passHref>
                    <a>{label}</a>
                  </Link>
                ))}
            </LinksWrapper>
            <LinksWrapper>
              <h4>關注我們</h4>
              <Link href={facebookLink}>
                <a style={{ fontSize: '32px' }}>
                  <MdOutlineFacebook />
                </a>
              </Link>
              {/* {navItemsSecondRow &&
                navItemsSecondRow.map(({ label, href }, idx) => (
                  <Link href={href} key={idx} passHref>
                    <a target="_blank">{label}</a>
                  </Link>
                ))} */}
            </LinksWrapper>
          </LinksContainer>
          <LogoWrapper>
            <Link href="/">
              <a>
                <BottomLogo />
              </a>
            </Link>
            <StyledP>@2025 金星殯儀 版權所有</StyledP>
          </LogoWrapper>
        </StyledContainer>
      </StyledFooter>
    </>
  )
}

export default Footer
