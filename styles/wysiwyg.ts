import { rem } from './helpers';

export const wysiwygStyles = `
  * {
    margin: 0;
  }

  p + p,
  p + ul,
  p + ol {
    margin-top: ${rem(10)};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: ${rem(18)};

    &::before {
      content: "";
      position: absolute;
      top: ${rem(7)};
      left: 0;
      background-image: url(/images/cursor-pointer.svg);
      background-size: contain;
      width: ${rem(10)};
      height: ${rem(10)};
    }

    &:not(:first-of-type) {
      margin-top: ${rem(8)};
    }
  }
`;
