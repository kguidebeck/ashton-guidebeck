import { css } from 'styled-components';
import { BASE_FONT_SIZE } from './constants';

// export const bp = {
//   desktop: '1680px',
//   desktopSm: '1440px',
//   laptop: '1380px',
//   laptopSm: '1240px',
//   tablet: '1080px',
//   portrait: '880px',
//   mobile: '767px',
//   mobileMid: '625px',
//   mobileSm: '580px',
//   mobileRealSm: '375px',
// };

export const hover = (val) => `
  @media(hover: hover) {
    &:hover {
      ${val}
    }
  }
`;

export const VisuallyHidden = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

/**
 * Center the element with absolute positioning
 * Pass null to disable centering on a given axis
 * @param {number} offsetX The percentage to offset on the X axis
 * @param {number} offsetY The percentage to offset on the Y axis
 */
export const absoCenter = (offsetX = 0, offsetY = 0) => {
  let p = '';
  let trans = '';

  if (offsetX !== null) {
    p = `left: ${50 + offsetX}%;`;
    trans = 'translateX(-50%)';
  }

  if (offsetY !== null) {
    p = ` ${p} top: ${50 + offsetY}%;`;
    trans = `${trans} translateY(-50%)`;
  }

  return `
    position: absolute;
    ${p}
    transform: ${trans};
  `;
};

/**
 * @desc Converts px units to rems
 * @param px - Value in pixels
 * @returns {string}
 */
export const rem = (px: number) =>
  `${parseFloat((px / BASE_FONT_SIZE).toFixed(4))}rem`;