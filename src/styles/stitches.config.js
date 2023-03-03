// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      darkBlue: '#01212b',
      blue: '#1b5263',
      lightPink: '#ffeae0',
      pink: '#ffd5c2',
      orange: '#cc8958',
      coral: '#c8553d',
      darkCoral: '#69494b',
      white: '#ffffff'
    },
    fonts: {
      lora: 'Lora, serif',
      noto: 'noto-sans, sans-serif',
    },
    fontWeights: {
      regular: '400',
      semiBold: '600',
      bold: '700'
    },
  },
  media: {
    bpDesktopLg: '(max-width: 1800px)',
    bpDesktop: '(max-width: 1680px)',
    bpDesktopSm: '(max-width: 1440px)',
    bpLaptop: '(max-width: 1380px)',
    bpLaptopSm: '(max-width: 1240px)',
    bpTablet: '(max-width: 1080px)',
    bpPortrait: '(max-width: 880px)',
    bpMobile: '(max-width: 767px)',
  },
  utils: {
    abs: (position) => ({
      top: position,
      right: position,
      bottom: position,
      left: position,
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value) => ({
      width: value,
      height: value,
    }),
    hover: (value) => ({
      '@media(hover: hover)': {
        '&:hover': value,
      },
    }),
  },
});
