import styled from 'styled-components';
import { Color, Font, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';

export const Input = styled.div`
  position: relative;
`;

export const InputWrap = styled.div`
  position: relative;

  svg {
    width: 100%;
  }

  input,
  textarea {
    position: absolute;
    top: 50%;
    left: ${rem(25)};
    font-family: ${Font.noto};
    font-size: ${rem(16)};
    width: calc(100% - ${rem(50)});
    border: 0;
    background: transparent;
    color: ${Color.orangeDark};
    transform: translateY(-50%);

    &::placeholder {
      color: ${Color.orangeDark};
      opacity: 1;
    }
  }

  textarea {
    resize: none;
    height: calc(100% - ${rem(65)});

    @media ${Screen.mobile} {
      height: calc(100% - ${rem(30)});
    }
  }
`;

export const Error = styled.span`
  position: absolute;
  top: ${rem(-10)};
  right: 10%;
  padding: ${rem(4)} ${rem(10)};
  color: ${Color.white};
  font-family: ${Font.noto};
  font-size: ${rem(12)};
  text-transform: uppercase;
  z-index: 5;

  @media ${Screen.mobile} {
    top: ${rem(-13)};
    font-size: ${rem(10)};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Color.sageDark};
    border-radius: ${rem(30)};
    z-index: -1;
  }
`;
