import { createGlobalStyle } from 'styled-components';
import { Font, Weight, Color } from './constants';

export const GlobalStyle = createGlobalStyle`
  :root {
    --container-width 1440px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${Font.lora};
    font-size: 16px;
    font-weight: ${Weight.regular};
    line-height: 1.5;
    color: ${Color.black};
    background-color: ${Color.cream};
    cursor: url("/cursor.svg"), auto;

    * {
      &::selection {
        /* WebKit/Blink Browsers */ background: $darkBlue;
        color: ${Color.white};
        background-color: ${Color.sageDark}
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .125em;
    font-weight: ${Weight.bold};
    line-height: 1;
    font-family: ${Font.noto};
    text-transform: uppercase;
  }

  img { max-width: 100% }

  figure { margin: 0 }

  form { position: relative }

  a {
    color: inherit;
    transition: color .24s;
  }

  button, a {
    &:focus-visible {
      outline: 2px solid ${Color.orangeDark};
      outline-offset: 2px;
    }

    &:not(:disabled) { cursor: pointer }

    &:disabled {
      pointer-events: none;
    }
  }

  input, button, a, textarea {
    outline: none;
  }

  input, textarea {
    &:focus-visible {
      border-bottom-color: ${Color.orangeDark};
    }
  }

  svg {
    display: block;
  }

  iframe {
    border: 0;
  }

  &.background-white + .background-white,
  &.background-palePink + .background-palePink,
  &.background-pink + .background-pink {
    padding-top: 0;
  }
`;
