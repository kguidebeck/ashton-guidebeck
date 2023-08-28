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
  z-index: 1000;
  width: 100%;
  padding: 0 ${rem(54)};
  transition: padding var(--duration) ${Ease.out};

  @media ${Screen.tablet} {
    padding: 0 ${rem(35)};
  }

  @media ${Screen.mobile} {
    padding: 0;
    background-color: ${({ isOpen }) =>
      isOpen ? Color.pinkLight : 'transparent'};
    transition: background-color 500ms ${Ease.out};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 ${rem(160)};
    z-index: 0;
    background-color: ${({ isOpen }) =>
      isOpen ? Color.pinkLight : Color.cream};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 40px -1px;
    opacity: 0;
    transition: background-color 500ms ${Ease.out},
      opacity var(--duration) ${Ease.out};

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
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${Screen.mobile} {
    padding-right: ${rem(20)};
  }
`;

export const LogoSVG = styled(LogoName)`
  width: 100%;
  height: auto;
  margin: 0 auto;
  color: ${Color.white};
`;

export const LogoBackground = styled(LogoCircle)`
  width: var(--logo-width);
  transform: translateY(0);
  transform-origin: center;
  transition: transform var(--duration) ${Ease.out};
`;

export const LogoWrap = styled.div<{ scrolled: boolean }>`
  --logo-width: ${rem(200)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: var(--logo-width);
  transform-origin: top left;
  transition: transform var(--duration) ${Ease.out};

  @media ${Screen.portrait} {
    --logo-width: ${rem(150)};
    left: ${rem(10)};
  }

  a {
    position: absolute;
    top: calc(50% - 10px);
    left: 50%;
    z-index: 5;
    display: block;
    width: 52%;
    transform: translate(-50%, -50%);

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
  padding: 0;
  border: 0;
  background: transparent;
  color: ${Color.orangeDark};

  @media ${Screen.mobileUp} {
    display: none;
  }

  svg {
    position: relative;

    path {
      position: absolute;
      animation-duration: 500ms;
      animation-timing-function: ${Ease.out};
      transform-origin: 50% 50%;

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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  list-style: none;

  @media ${Screen.mobile} {
    position: absolute;
    top: ${rem(60)};
    right: 0;
    z-index: -1;
    width: 100%;
    height: calc(100dvh - ${rem(60)});
    flex-direction: column;
    justify-content: flex-start;
    padding: ${rem(75)} ${rem(20)} 0;
    background: ${Color.pinkLight};
    transform: translateY(-120%);
    transition: transform 800ms ${Ease.out};

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
    width: 100%;
    text-align: center;

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

export const PrimaryLink = styled(Link)<{ $scrolled: boolean }>`
  ${ButtonStyles}
  transition: padding 300ms ${Ease.out};

  @media ${Screen.mobileUp} {
    ${({ $scrolled }) =>
      $scrolled &&
      `
      padding: ${rem(10)} ${rem(40)};
    `}
  }
`;

export const HeaderLink = styled(Link)`
  position: relative;
  font-family: ${Font.noto};
  font-weight: ${Weight.bold};
  text-decoration: none;
  text-transform: uppercase;

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
    transform-origin: center;
    transition: transform 500ms ${Ease.out};
  }
`;
