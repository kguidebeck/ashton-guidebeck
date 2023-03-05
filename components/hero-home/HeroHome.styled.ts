import { Color } from '@styles/constants';
import styled from 'styled-components';

export const HeroWrap = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Headshot = styled.div`
  position: relative;
  border-radius: 178px 178px 150px 0;
  max-width: 360px;
  width: 25vw;
  background: ${Color.palePink};
  overflow: hidden;

  &::after {
    content: '';
    border: 2px solid ${Color.rust};
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
