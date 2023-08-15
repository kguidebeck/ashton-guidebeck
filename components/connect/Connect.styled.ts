import { Color } from '@styles/constants';
import { rem } from '@styles/helpers';
import styled from 'styled-components';

export const Connect = styled.div`
  position: relative;
  padding-top: ${rem(100)};
`;

export const Background = styled.div`
  aspect-ratio: 1.22;
  position: absolute;
  bottom: 0;
  width: 72vw;
  max-width: ${rem(1052)};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 90px;
  min-height: 70vh;
`;

export const Content = styled.div`
  position: relative;
  max-width: ${rem(650)};
  width: 35vw;
  margin-left: auto;
  padding-bottom: ${rem(180)};
`;

export const Copy = styled.div`
  background-color: ${Color.cream};
`;
