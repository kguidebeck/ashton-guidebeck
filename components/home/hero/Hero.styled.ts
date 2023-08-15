import { Color } from '@styles/constants';
import { rem } from '@styles/helpers';
import styled from 'styled-components';

export const Hero = styled.div`
  padding-bottom: ${rem(80)};
`;

export const CircleBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75vw;
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
`;

export const Headshot = styled.div`
  position: relative;
  max-width: ${rem(420)};
  width: 25vw;
  color: ${Color.sageLight};
  overflow: hidden;
  margin: 0 ${rem(100)};

  img {
    position: absolute;
    bottom: 14px;
    width: 85%;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
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

  a {
    margin-top: ${rem(40)};
    display: inline-block;
  }
`;

export const Heading = styled.h1`
  margin-bottom: ${rem(35)};
`;
