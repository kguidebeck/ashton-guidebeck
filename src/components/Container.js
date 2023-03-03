import { styled } from '../styles/stitches.config';

const Container = styled('div', {
  maxWidth: '1480px',
  margin: 'auto',
  paddingX: '54px',

  '@bpMobile': {
    paddingX: '20px',
  },
});

export default Container;
