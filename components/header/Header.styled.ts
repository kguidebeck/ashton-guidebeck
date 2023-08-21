import Link from 'next/link';
import styled from 'styled-components';
import { Font, Weight, Screen, Color, Ease } from '@styles/constants';
import LogoName from '@assets/svgs/LogoName';
import LogoCircle from '@assets/svgs/LogoCircle';
import { rem } from '@styles/helpers';
import { ButtonStyles } from '@components/ui/button/Button.styled';

const ToggleKeyframes = `
  @keyframes topBunOpen {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(${rem(10)});
    }
    100% {
      transform: rotate(45deg) translateY(${rem(10)});
    }
  }

  @keyframes topBunClose {
    0% {
      transform: rotate(45deg) translateY(${rem(10)});
    }
    50% {
      transform: rotate(0) translateY(${rem(10)});
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bottomBunOpen {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(${rem(-10)});
    }
    100% {
      transform: rotate(-45deg) translateY(${rem(-10)});
    }
  }

  @keyframes bottomBunClose {
    0% {
      transform: rotate(-45deg) translateY(${rem(-10)});
    }
    50% {
      transform: rotate(0) translateY(${rem(-10)});
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Header = styled.header<{ scrolled: boolean; isOpen: boolean }>`
  --duration: 0.6s;
  position: fixed;
  width: 100%;
  padding: 0 ${rem(54)};
  z-index: 1000;
  transition: padding var(--duration) ${Ease.out};
  z-index: 1000;

  @media ${Screen.tablet} {
    padding: 0 ${rem(35)};
  }

  @media ${Screen.mobile} {
    padding: 0;
    transition: background-color 500ms ${Ease.out};

    background-color: ${({ isOpen }) =>
      isOpen ? Color.pinkLight : 'transparent'};
  }

  &::after {
    content: '';
    opacity: 0;
    background-color: ${({ isOpen }) =>
      isOpen ? Color.pinkLight : Color.cream};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${rem(160)};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 40px -1px;
    transition: background-color 500ms ${Ease.out},
      opacity var(--duration) ${Ease.out};
    z-index: 0;

    @media ${Screen.mobile} {
      left: ${rem(75)};
    }
  }

  ${({ scrolled }) =>
    scrolled &&
    `
    &::after {
      opacity: 1;
    }
  `}
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

export const LogoSVG = styled(LogoName)`
  color: ${Color.white};
  width: 88%;
  margin: 0 auto;
`;

export const LogoBackground = styled(LogoCircle)`
  transform: translateY(0);
  width: var(--logo-width);
  transform-origin: center;
  transition: transform var(--duration) ${Ease.out};
`;

export const LogoWrap = styled.div<{ scrolled: boolean }>`
  --logo-width: ${rem(200)};
  position: absolute;
  top: 0;
  left: 0;
  width: var(--logo-width);
  transform-origin: top left;
  transition: transform var(--duration) ${Ease.out};
  z-index: 1;

  @media ${Screen.portrait} {
    --logo-width: ${rem(150)};
    left: ${rem(10)};
  }

  a {
    display: block;
    position: absolute;
    top: calc(50% - 10px);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 60%;

    &:focus-visible {
      outline-color: ${Color.white};
    }
  }

  @media ${Screen.portraitUp} {
    ${({ scrolled }) =>
      scrolled &&
      `
      transform: scale(0.8);
    `}
  }
`;

export const HeaderContent = styled.div<{ scrolled: boolean }>`
  --y-padding: ${rem(18)};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: var(--y-padding) 0;
  transition: padding 300ms ease;

  @media ${Screen.mobileUp} {
    ${({ scrolled }) =>
      scrolled &&
      `
      --y-padding: ${rem(10)};
    `}
  }
`;

export const MobileToggle = styled.button<{
  isOpen: boolean;
  initialRender: boolean;
}>`
  ${ToggleKeyframes};
  width: ${rem(30)};
  color: ${Color.orangeDark};
  padding: 0;
  background: transparent;
  border: 0;

  @media ${Screen.mobileUp} {
    display: none;
  }

  svg {
    position: relative;

    path {
      position: absolute;
      transform-origin: 50% 50%;
      animation-duration: 500ms;
      animation-timing-function: ${Ease.out};

      &:nth-of-type(2) {
        transition: opacity 500ms ease;
      }
    }
  }

  ${({ initialRender, isOpen }) =>
    !initialRender &&
    !isOpen &&
    `
  svg {
    path {
      animation-fill-mode: forwards;

      &:first-of-type {
        animation-name: topBunClose;
      }

      &:nth-of-type(2) {
        opacity: 1;
      }

      &:last-of-type {
        animation-name: bottomBunClose;
      }
    }
  }
  `}

  ${({ isOpen }) =>
    isOpen &&
    `
      svg {
        path {
          animation-fill-mode: forwards;

          &:first-of-type {
            animation-name: topBunOpen;
          }

          &:nth-of-type(2) {
            opacity: 0;
          }

          &:last-of-type {
            animation-name: bottomBunOpen;
          }
        }
      }
    `}
`;

export const HeaderItems = styled.ul<{ isOpen: boolean }>`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media ${Screen.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: ${rem(55)};
    right: 0;
    background: ${Color.pinkLight};
    width: 100%;
    height: calc(100dvh - ${rem(60)});
    padding: ${rem(75)} ${rem(20)} 0;
    transform: translateY(-120%);
    transition: transform 800ms ${Ease.out};
    z-index: -1;

    ${({ isOpen }) =>
      isOpen &&
      `
      transform: translateY(0);
    `}
  }
`;

export const HeaderItem = styled.li`
  position: relative;

  @media ${Screen.mobileUp} {
    &:not(:first-of-type) {
      margin-left: ${rem(48)};
    }

    a {
      &:hover,
      &:focus-visible {
        outline: none;

        &::after {
          transform: scaleX(1);
        }
      }
    }
  }

  @media ${Screen.mobile} {
    text-align: center;
    width: 100%;

    &:not(:last-of-type) {
      --button-background: transparent;
      --button-color: ${Color.orangeDark};
      --button-border: ${Color.orangeDark};
      ${ButtonStyles}
      padding: 0;

      a {
        padding: ${rem(18)} ${rem(50)};
        border-radius: ${rem(55)};

        &:focus-visible {
          outline: 2px solid ${Color.orangeDark};
          outline-offset: 5px;
        }
      }
    }

    &:not(:last-of-type) {
      margin-bottom: ${rem(25)};
    }
  }
`;

export const PrimaryLink = styled(Link)<{ scrolled: boolean }>`
  ${ButtonStyles}
  transition: padding 300ms ${Ease.out};

  @media ${Screen.mobileUp} {
    ${({ scrolled }) =>
      scrolled &&
      `
      padding: ${rem(10)} ${rem(40)};
    `}
  }
`;

export const HeaderLink = styled(Link)`
  position: relative;
  font-family: ${Font.noto};
  font-weight: ${Weight.bold};
  text-transform: uppercase;
  text-decoration: none;

  @media ${Screen.mobile} {
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: ${rem(-3)};
    left: 0;
    height: ${rem(4)};
    width: 100%;
    border-radius: ${rem(2)};
    background: ${Color.sageDark};
    transform: scaleX(0);
    transition: transform 500ms ${Ease.out};
    transform-origin: center;
  }
`;
