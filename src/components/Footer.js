import React from 'react';
import { styled } from '../styles/stitches.config'
import Container from './Container';

const StyledFooter = styled('footer', {
  paddingY: '20px',
  backgroundColor: '$pink',
});

const Copyright = styled('time', {
  display: 'block',
  fontFamily: '$noto',
  textAlign: 'right'
});

const Footer = () => (
  <StyledFooter>
    <Container>
      <Copyright>&copy;{new Date().getFullYear()}</Copyright>
    </Container>
  </StyledFooter>
);

export default Footer;
