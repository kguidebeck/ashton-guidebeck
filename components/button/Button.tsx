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
}: ButtonSchema) => {
  const isExternal = href
    ? ['/', '#'].includes(href.toString().charAt(0))
    : null;
  const hasHash = href?.toString().includes('#');

  const StyledButton = styled(
    !isExternal && href ? Link : isExternal && href ? 'a' : 'button'
  )`
    ${Styled.ButtonStyles}
  `;

  // const scrollToSection = (el: React.MouseEvent<HTMLElement>) => {
  //   const path = el.currentTarget.getAttribute('href');
  //   const hash = path?.slice(path.indexOf('#'));
  //   if (!hash) return;

  //   if (hash) {
  //     const section = document.getElementById(hash.replace('#', ''));

  //     // if (section) {
  //     //   const yOffset = -FIXED_NAVBAR_HEIGHT;

  //     //   scroller.scrollTo(section.id, {
  //     //     duration: 1000,
  //     //     delay: 0,
  //     //     smooth: true,
  //     //     offset: yOffset,
  //     //   });
  //     // }
  //   }
  // };

  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled ? true : false}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
