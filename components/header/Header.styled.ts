import Link from 'next/link';
import styled from 'styled-components';
import { Font, Weight, Screen, Color, Ease } from '@styles/constants';
import LogoText from '@assets/svgs/LogoText';
import LogoCircle from '@assets/svgs/LogoCircle';

export const Header = styled.header<{ scrolled: boolean }>`
  --y-padding: 30px;
  --duration: 0.6s;
  position: fixed;
  width: 100%;
  padding: var(--y-padding) 80px var(--y-padding) 10px;
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
    left: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 40px -1px;
    transition: opacity var(--duration) ${Ease.out};
    z-index: 0;
  }

  ${({ scrolled }) =>
    scrolled &&
    `
    --y-padding: 15px;

    &::after {
      opacity: 1;
    }
  `}

  @media ${Screen.mobile} {
    padding: 20px 0;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const LogoSVG = styled(LogoText)`
  position: relative;
  width: 190px;
  margin-left: 65px;
  z-index: 5;
  color: ${Color.white};
  transform-origin: center;
  transition: transform var(--duration) ${Ease.out};
`;

export const LogoBackground = styled(LogoCircle)`
  position: absolute;
  top: -38px;
  transform: translateY(0);
  width: var(--logo-width);
  transform-origin: center;
  transition: transform var(--duration) ${Ease.out};
`;

export const LogoWrap = styled.div<{ scrolled: boolean }>`
  --logo-width: 335px;
  position: relative;
  width: var(--logo-width);

  ${({ scrolled }) =>
    scrolled &&
    `
      ${LogoSVG} {
        transform: scale(.8);
      }

      ${LogoBackground} {
        transform: scale(.8) translateY(-20px); 
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
