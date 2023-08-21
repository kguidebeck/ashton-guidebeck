import Link from 'next/link';
import { UrlObject } from 'url';
import styled from 'styled-components';
import * as Styled from './Button.styled';

export interface ButtonSchema {
  className?: string;
  href?: string | UrlObject;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  className,
  href,
  onClick,
  disabled,
  children,
  ...rest
}: ButtonSchema) => {
  const isInternal = href
    ? ['/', '#'].includes(href.toString().charAt(0))
    : null;
  const hasHash = href?.toString().includes('#');

  const StyledButton = styled(
    isInternal && href ? Link : !isInternal && href ? 'a' : 'button'
  )`
    ${Styled.ButtonStyles}
  `;

  return (
    <StyledButton
      className={className}
      disabled={disabled ? true : false}
      {...(href && { href })}
      {...(onClick && { onClick })}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
