import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  ':root': {
    '--container-width': '1440px',
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    fontFamily: '$lora',
    fontSize: '16px',
    fontWeight: '$regular',
    lineHeight: 1.5,
    color: '$darkBlue',
    backgroundColor: '$lightPink',
    cursor: 'url("/cursor.svg"), auto',

    '*': {
      '&::selection' : { /* WebKit/Blink Browsers */
        background: '$darkBlue',
        color: '$white',
      }
    }
  },

  'h1, h2, h3, h4, h5, h6': {
    marginTop: 0,
    marginBottom: '.125em',
    fontWeight: '400',
    lineHeight: 1,
    color: '$darkBlue',
    fontFamily: '$noto',
    textTransform: 'uppercase'
  },

  img: { maxWidth: '100%' },

  figure: { margin: 0, },

  form: { position: 'relative' },

  a: {
    color: 'inherit',
    transition: 'color .24s',
  },

  'button, a': {
    '&:focus-visible': {
      outline: '2px solid $blue',
      outlineOffset: '2px',
    },

    '&:not(:disabled)': { cursor: 'pointer' },

    '&:disabled': {
      pointerEvents: 'none',
    },
  },

  'input, button, a, textarea': {
    outline: 'none',
  },

  'input, textarea': {
    '&:focus-visible': {
      borderBottomColor: '$blue',
    },
  },
});

export default globalStyles;
