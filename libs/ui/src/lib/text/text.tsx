/* eslint-disable-next-line */
import { createElement, PropsWithChildren } from 'react';
import styled, { DefaultTheme } from 'styled-components';
export interface TextProps {
  component?: keyof Pick<React.ReactHTML, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div' | 'blockquote'>
  className?: string;
  fontSize?: keyof DefaultTheme['fontSize'];
  color?: keyof DefaultTheme['colors'] | '#222';
  bold?: boolean;
}

const createSc = ({
  component,
  fontSize,
  color,
  bold
}: Exclude<Required<TextProps>, 'className'>) => styled(component)`
  font-size: ${({ theme }) => theme.fontSize[fontSize]};
  color: ${({ theme }) => color !== '#222' ? theme.colors[color] : color};
  font-weight: ${bold ? 'bold' : 0};
`

export function Text({
  component = 'span',
  children,
  className,
  fontSize = 'body1',
  color = '#222',
  bold = false,
}: PropsWithChildren<TextProps>) {


  return createElement(
    createSc({ component, fontSize, color, className: '', bold }),
    {
      className
    },
    children
  )
}

export default Text;
