import { Color, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import styled from 'styled-components';

export const Connect = styled.div`
  position: relative;
  padding-top: ${rem(100)};
  width: 100%;
  max-width: ${rem(1800)};
  margin: 0 auto;

  @media ${Screen.portrait} {
    padding-top: ${rem(30)};
  }
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

    &.image--mobile {
      display: none;
    }
  }

  @media ${Screen.laptopSm} {
    bottom: 5vw;
    width: 90vw;
  }

  @media ${Screen.portrait} {
    width: 100vw;
    bottom: 0;

    img {
      width: 150vw;
      object-fit: cover;
    }
  }

  @media ${Screen.mobile} {
    img {
      &.image--desktop {
        display: none;
      }

      &.image--mobile {
        display: block;
      }
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 90px;
  min-height: 70vh;

  @media ${Screen.portrait} {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: ${rem(650)};
  width: 35vw;
  margin-left: auto;
  padding-bottom: ${rem(180)};

  @media ${Screen.laptopSm} {
    width: 40vw;
  }

  @media ${Screen.portrait} {
    width: 80vw;
    max-width: ${rem(450)};
    margin-right: auto;
    padding-bottom: ${rem(400)};
    text-align: center;
  }

  @media ${Screen.mobile} {
    width: 100%;
    padding-bottom: 60vw;
  }
`;

export const Copy = styled.div`
  background-color: ${Color.cream};

  p {
    margin-bottom: 0;
  }
`;
