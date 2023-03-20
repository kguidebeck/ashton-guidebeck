import { Lora, Noto_Sans } from '@next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['700'],
});

export const FIXED_NAVBAR_HEIGHT = 120;
export const BASE_FONT_SIZE = 16;

export const Color: { [char: string]: string } = {
  white: '#fff',
  black: '#000',
  rust: '#733F28',
  taupe: '#C2947E',
  pink: '#FFEAE0',
  palePink: '#FFF6F2',
  blue: '#1B5263',
  darkBlue: '#01212B',
};

export const Font = {
  lora: lora.style.fontFamily,
  noto: noto.style.fontFamily,
};

export const Weight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

export const Screen = {
  mobile: '(max-width: 767px)',
  mobileUp: '(min-width: 768px)',
  portrait: '(max-width: 879px)',
  portraitUp: '(min-width: 880px)',
  tablet: '(max-width: 1079px)',
  tabletUp: '(min-width: 1080px)',
  laptopSm: '(max-width: 1239px)',
  lapotpSmUp: '(min-width: 1240px)',
  laptop: '(max-width: 1379px)',
  lapotpUp: '(min-width: 1380px)',
  desktopSm: '(max-width: 1439px)',
  desktopSmUp: '(min-width: 1440px)',
  desktop: '(max-width: 1679px)',
  desktopUp: '(min-width: 1680px)',
  desktopLg: '(max-width: 1799px)',
  desktopLgUp: '(min-width: 1800px)',
};

export const Ease = {
  out: `cubic-bezier(0.28, 0.44, 0.49, 1)`,
  outFast: `cubic-bezier(0.2, 1, 0.2, 1)`,
  duration: '0.2s',
};

export const Grid = {
  mobilePadding: '20px',
  mobilePaddingCols: '10px',
};

export const Spacing = {
  large: '140px',
  medium: '100px',
  small: '80px',
  xSmall: '60px',
};

export const Heights = {
  header: '60px',
  headerMobile: '60px',
  banner: '40px',
  bannerMobile: '60px',
};

export const Z = {
  header: '1049',
  subnav: '1048',
};
