import styled from 'styled-components';
import { Color, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import ContainerComponent from '@components/container';

export const Hero = styled.div`
  min-height: calc(100vh - ${rem(76)});
  padding-bottom: ${rem(80)};
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;

  @media ${Screen.laptopSm} {
    padding: ${rem(100)} 0;
  }

  @media ${Screen.portrait} {
    padding: ${rem(175)} 0;
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
  inset: 0;
  overflow: hidden;
`;

export const CircleBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75vw;

  @media ${Screen.tablet} {
    width: 85vw;
  }

  @media ${Screen.portrait} {
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

export const PlantGraphic = styled.div`
  max-width: ${rem(300)};
  width: 35vw;
  position: absolute;
  right: -20%;
  bottom: -8%;
  aspect-ratio: 488 / 590;
  overflow: hidden;

  @media ${Screen.portrait} {
    width: 56vw;
  }

  @media ${Screen.mobile} {
    right: -10vw;
    bottom: 15vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const GraphicMobile = styled.div`
  width: ${rem(290)};
  position: absolute;
  right: -4%;
  bottom: -2%;
  aspect-ratio: 251 / 287;
  overflow: hidden;

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
  display: flex;
  align-items: center;
  z-index: 1;
  padding-top: ${rem(80)};

  @media ${Screen.portrait} {
    flex-direction: column-reverse;
    align-items: flex-end;
    padding-top: 0;
    max-width: ${rem(500)};
    margin: 0 auto;
  }

  @media ${Screen.mobile} {
    padding-bottom: ${rem(125)};
  }
`;

export const Headshot = styled.div`
  position: relative;
  max-width: ${rem(300)};
  width: 25vw;
  color: ${Color.sageLight};
  overflow: hidden;
  margin: 0 ${rem(100)};

  @media ${Screen.laptopSm} {
    margin: 0 ${rem(50)} 0 ${rem(100)};
  }

  @media ${Screen.tablet} {
    max-width: ${rem(300)};
    margin: 0 ${rem(50)} 0 1vw;
    width: 160vw;
  }

  @media ${Screen.portrait} {
    width: 75vw;
    margin: ${rem(40)} auto 0 0;
  }

  @media ${Screen.mobile} {
    width: 60vw;
  }
`;

export const HeadshotImage = styled.div`
  position: absolute;
  bottom: 2.5%;
  width: 85%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  aspect-ratio: 403 / 606;

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
  transform: translateX(-50%);
  max-width: unset;
  width: 110%;
`;

export const Copy = styled.div`
  max-width: ${rem(550)};

  p {
    margin: 0;
  }

  a {
    margin-top: ${rem(40)};
    display: inline-block;
  }

  @media ${Screen.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  margin-bottom: ${rem(35)};
`;
