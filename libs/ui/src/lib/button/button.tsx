import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  href: string;
  variant?: 'contained' | 'outlined';
  isButton?: boolean;
}

const StyledButton = styled.a<Partial<ButtonProps>>`
  color: ${(props) => props.theme.colors.default};
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  height: 48px;
  padding: 0 32px;
  border: 1px solid ${(props) => props.theme.colors.default};
  border-radius: 50px;
  transition: 250ms ease;
  cursor: pointer;

  ${({ variant, theme }) =>
    (variant === 'contained' &&
      css`
        border: 1px solid ${theme.colors.default};
        color: white;
        background: ${theme.colors.default};
      `) ||
    (variant === 'outlined' &&
      css`
        border: 1px solid ${theme.colors.default};
        color: ${theme.colors.default};

        &:hover {
          color: white;
          background: ${theme.colors.default};
          transition: 250ms ease;
        }
      `)}
`;

export function Button({
  children,
  className,
  href,
  variant = 'outlined',
  isButton,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) {
  return isButton ? (
    <StyledButton className={className} variant={variant} {...buttonProps} as="button">
      {children}
    </StyledButton>
  ) : (
    <Link href={href}>
      <StyledButton className={className} variant={variant}>
        {children}
      </StyledButton>
    </Link>
  );
}

export default Button;
