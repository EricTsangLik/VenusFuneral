import styled, { css } from 'styled-components';
import { PropsWithChildren, useState } from 'react';
import React from 'react'
import Text from '../text/text';

/* eslint-disable-next-line */
export interface TabsProps {
  className?: string;
  onChange?: (index: number) => void;
  id?: string;
}

export interface TabProps {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  index?: number;
}

const StyledTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  flex-direction: column;

  ${({theme}) => theme.breakPoints.tablet} {
    flex-direction: row;
  }
`;

const StyledTab = styled.div<Partial<TabProps>>`
  position: relative;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    span {
      color: ${({theme}) => theme.colors.default};
    }
  }

  span {
    color: ${({theme}) => theme.colors.gray};
  }

  ${({ isActive, theme }) =>
    (
      isActive && css`
      span {
        color: ${theme.colors.default} !important;
      }
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        background-color: ${theme.colors.gold};
        bottom: -4px;
        left: 0;
      }
    `
    ) ||
    (
      !isActive && css`
      color: ${theme.colors.gray};
    `
    ) 
  }

  ${({theme}) => theme.breakPoints.tablet} {
    margin-bottom: 0;
    
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`

export const Tab: React.FC<PropsWithChildren<TabProps>> = ({
  className,
  onClick,
  isActive,
  children
}) => {

  return (
    <StyledTab isActive={isActive} onClick={onClick}>
      <Text fontSize="h5" component="span" >
      {children}
      </Text>
    </StyledTab>
  )
}

export function Tabs({
  className,
  children,
  onChange,
  id,
}: PropsWithChildren<TabsProps>) {
  const [selectedTab, setSelectedTab] = useState(0)
  const clickTabHandler = (index: number) => () => {
    setSelectedTab(index)

    if (onChange) {
      onChange(index)
    }
  }

  return (
    <StyledTabs id={id} className={className}>
      {
        React.Children.map(children, (child, idx) => {
          return React.cloneElement(child as any, {
            index: idx,
            onClick: clickTabHandler(idx),
            isActive: idx === selectedTab
          })
        })
      }
    </StyledTabs>
  );
}

export default Tabs;
