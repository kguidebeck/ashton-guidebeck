import { rem } from '@styles/helpers';
import styled from 'styled-components';

export const Wrap = styled.div<{ pageID?: string }>`
  position: relative;
  padding: ${({ pageID }) =>
    pageID && (pageID === 'home' || pageID === 'error')
      ? `0`
      : `${rem(150)} 0`};
`;
