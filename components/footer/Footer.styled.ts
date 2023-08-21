import styled from 'styled-components';
import { Color, Font } from '@styles/constants';
import { rem } from '@styles/helpers';

export const Footer = styled.footer`
  position: relative;
  padding: ${rem(10)} 0;
  background: ${Color.sageDark};
  color: ${Color.white};
  z-index; 100;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-family: ${Font.noto};
  }
`;
