import Link from 'next/link';
import styled from 'styled-components';
import { Font, Weight, Screen, Color, Ease } from '@styles/constants';
// import LogoText from '@assets/svgs/LogoText';
import LogoAshton from '@assets/svgs/LogoAshton';
import LogoCircle from '@assets/svgs/LogoCircle';
import Hamburger from '@assets/svgs/Hamburger';
import { rem } from '@styles/helpers';

export const Header = styled.header<{ scrolled: boolean }>`
  --y-padding: 30px;
  --duration: 0.6s;
  position: fixed;
  width: 100%;
  padding: 0 80px 0 50px;
  z-index: 1000;
  transition: padding var(--duration) ${Ease.out};

  &::after {
    content: '';
    opacity: 0;
    background-color: ${Color.cream};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 165px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 40px -1px;
    transition: opacity var(--duration) ${Ease.out};
    z-index: 0;

    @media ${Screen.mobile} {
      left: 0;
    }
  }

  ${({ scrolled }) =>
    scrolled &&
    `
    &::after {
      opacity: 1;
    }
  `}

  @media ${Screen.mobile} {
    padding: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media ${Screen.mobile} {
    padding-right: ${rem(20)};
  }
`;

export const LogoSVG = styled(LogoAshton)`
  color: ${Color.white};
  // transform-origin: center;
  // transition: transform var(--duration) ${Ease.out};
`;

export const LogoBackground = styled(LogoCircle)`
  transform: translateY(0);
  width: var(--logo-width);
  transform-origin: center;
  transition: transform var(--duration) ${Ease.out};
`;

export const LogoWrap = styled.div<{ scrolled: boolean }>`
  --logo-width: 200px;
  position: relative;
  width: var(--logo-width);
  transform-origin: center;
  transition: transform var(--duration) ${Ease.out};

  a {
    display: block;
    position: absolute;
    top: calc(50% - 10px);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 60%;
  }
`;

export const MobileToggle = styled.div<{ isOpen: boolean }>`
  width: ${rem(30)};
  color: ${Color.orangeDark};

  @media ${Screen.mobileUp} {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
      svg {
        position: relative;

        path {
          position: absolute;

          &:first-of-type {
            transform: translateY(${rem(10)});
          }

          &:last-of-type {
            transform: translateY(${rem(-10)});
          }
        }
      }
    `}
`;

export const HeaderItems = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${Screen.mobile} {
    display: none;
    flex-direction: column;
  }
`;

export const HeaderItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 48px;
  }
`;

export const HeaderLink = styled(Link)`
  font-family: ${Font.noto};
  font-weight: ${Weight.bold};
  text-transform: uppercase;
  text-decoration: none;
`;
