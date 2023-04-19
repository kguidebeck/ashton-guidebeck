import { Color } from '@styles/constants';
import styled from 'styled-components';

export const HeroWrap = styled.div``;

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

export const Div = styled.div`
  height: 500vh;
`;

export const Headshot = styled.div`
  position: relative;
  border-radius: 178px 178px 150px 0;
  max-width: 360px;
  width: 25vw;
  background: ${Color.sageLight};
  overflow: hidden;

  &::after {
    content: '';
    border: 3px solid ${Color.cream};
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    border-radius: 178px 178px 150px 0;
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
