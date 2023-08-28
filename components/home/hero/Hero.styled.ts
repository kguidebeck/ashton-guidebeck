import Link from 'next/link';
import styled from 'styled-components';
import { Color, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import ContainerComponent from '@components/container';
import { ButtonStyles } from '@components/ui/button/Button.styled';

export const Hero = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - ${rem(76)});
  align-items: center;
  padding-bottom: ${rem(80)};

  @media ${Screen.laptopSm} {
    padding: ${rem(100)} 0;
  }

  @media ${Screen.portrait} {
    padding: ${rem(175)} 0;
    background-color: ${Color.pinkLight};
  }

  @media ${Screen.mobile} {
    padding: ${rem(125)} 0 0;
  }
`;

export const Container = styled(ContainerComponent)`
  @media ${Screen.mobile} {
    overflow: hidden;
  }
`;

export const BackgroundWrap = styled.div`
  position: absolute;
  overflow: hidden;
  inset: 0;
`;

export const CircleBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75vw;

  @media ${Screen.laptopSm} {
    width: 80vw;
  }

  @media ${Screen.tablet} {
    width: 85vw;
  }

  @media ${Screen.portrait} {
    display: none;
    width: 110vw;
    left: 0;
  }

  svg {
    &:first-of-type {
      display: block;
      height: 120vh;
      margin-left: auto;

      @media ${Screen.portrait} {
        display: none;
      }
    }
    &:last-of-type {
      display: none;

      @media ${Screen.portrait} {
        display: block;
      }
    }
  }
`;

export const PlantGraphic = styled.div<{ mobile?: boolean }>`
  position: absolute;
  right: -10vw;
  bottom: -7vw;
  overflow: hidden;
  aspect-ratio: 488 / 590;
  width: 35vw;
  max-width: ${rem(300)};

  @media ${Screen.desktopSm} {
    width: 25vw;
  }

  @media ${Screen.portrait} {
    width: 35vw;
    right: -15vw;
  }

  @media ${Screen.mobile} {
    width: 50vw;
    right: -50%;
    bottom: -8%;
  }

  ${({ mobile }) =>
    mobile
      ? `
        display: none;
        @media ${Screen.portrait} {
          display: block;
      }`
      : `
        display: block;
        @media ${Screen.portrait} {
          display: none;
        }
      `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const GraphicMobile = styled.div`
  position: absolute;
  right: -4%;
  bottom: -2%;
  overflow: hidden;
  aspect-ratio: 251 / 287;
  width: ${rem(290)};

  @media ${Screen.portraitUp} {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding-top: ${rem(80)};

  @media ${Screen.portrait} {
    max-width: ${rem(500)};
    flex-direction: column;
    align-items: flex-end;
    padding-top: 0;
    margin: 0 auto;
  }

  @media ${Screen.mobile} {
    padding-bottom: ${rem(125)};
  }
`;

export const Headshot = styled.div`
  position: relative;
  overflow: hidden;
  width: 25vw;
  max-width: ${rem(300)};
  margin: 0 ${rem(100)};
  color: ${Color.sageLight};

  @media ${Screen.desktopUp} {
    margin: 0 ${rem(100)} 0 0;
  }

  @media ${Screen.laptopSm} {
    margin: 0 ${rem(50)} 0 0;
  }

  @media ${Screen.tablet} {
    width: 160vw;
    max-width: ${rem(300)};
    margin: 0 ${rem(50)} 0 1vw;
  }

  @media ${Screen.portrait} {
    overflow: unset;
    width: 75vw;
    margin: 0 30% 0 0;
  }

  @media ${Screen.mobile} {
    width: 60vw;
  }
`;

export const HeadshotImage = styled.div`
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  aspect-ratio: 403 / 606;
  width: 85%;
  height: auto;
  transform: translateX(-50%);

  img {
    object-fit: cover;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  padding-top: 161%;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 110%;
  max-width: unset;
  transform: translateX(-50%);
`;

export const Copy = styled.div`
  max-width: ${rem(550)};

  @media ${Screen.portrait} {
    margin-top: 8vw;
  }

  @media ${Screen.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: ${rem(45)};
  }

  p {
    margin: 0;
  }

  a {
    display: inline-block;
    margin-top: ${rem(40)};
  }
`;

export const Heading = styled.h1<{ mobile?: boolean }>`
  width: 100%;
  margin-bottom: ${rem(35)};

  ${({ mobile }) =>
    mobile
      ? `
        display: none;

        @media ${Screen.portrait} {
          display: block;
        }
      `
      : `
      @media ${Screen.portrait} {
        display: none;
      }
    `}
`;

export const Button = styled(Link)`
  ${ButtonStyles};
`;
