import React from 'react';
import { styled } from '../styles/stitches.config'
import Container from './Container'
import Logo from './Logo';
// import Button from './Button';

const StyledHeader = styled('header', {
  paddingY: '40px',

  '@bpMobile': {
    paddingY: '20px',
  },
})

const HeaderWrap = styled(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledLogo = styled(Logo, {
  width: '120px',
  height: '27px',
});

// const HeaderItems = styled('div', {
//   display: 'flex',
//   alignItems: 'center'
// });

// const HeaderItem = styled(Button, {
//   '&:not(:first-of-type)': {
//     marginLeft: '48px',
//   },
// });

const Header = () => (
  <StyledHeader>
    <HeaderWrap>
      <StyledLogo />
      {/* <HeaderItems>
        <HeaderItem section="about" type="link">About</HeaderItem>
        <HeaderItem section="resume" type="link">Resume</HeaderItem>
        <HeaderItem section="another" type="link">Another Item</HeaderItem>
        <HeaderItem section="contact">Contact</HeaderItem>
      </HeaderItems> */}
    </HeaderWrap>
  </StyledHeader>
);

export default Header;
