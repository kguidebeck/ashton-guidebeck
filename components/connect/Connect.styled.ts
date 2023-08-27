import { Color, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import styled from 'styled-components';

export const Connect = styled.div`
  position: relative;
  width: 100%;
  max-width: ${rem(1800)};
  padding-top: ${rem(100)};
  margin: 0 auto;

  @media ${Screen.portrait} {
    padding-top: ${rem(30)};
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  aspect-ratio: 1.22;
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
    bottom: 0;
    width: 100vw;

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
  width: 35vw;
  max-width: ${rem(650)};
  padding-bottom: ${rem(180)};
  margin-left: auto;

  @media ${Screen.laptopSm} {
    width: 40vw;
  }

  @media ${Screen.portrait} {
    width: 80vw;
    max-width: ${rem(450)};
    padding-bottom: ${rem(400)};
    margin-right: auto;
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
