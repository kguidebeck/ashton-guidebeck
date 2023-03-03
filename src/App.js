import React from 'react';
import globalStyles from './styles/global-style';
import { styled } from './styles/stitches.config';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Floral from './components/Floral';
import Dots from './components/Dots';

const StyledMain = styled('main', {
  position: 'relative',
  minHeight: 'calc(100vh - (107px + 64px))',
  overflow: 'hidden',
});

const Graphics = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '-90px',
  maxWidth: '650px',
  width: '50%',
  zIndex: '-1',

  '@bpPortrait': {
    width: '110%',
    left: '50%',
    opacity: '0.1',
    transform: 'translateX(-50%)',
  }
});

const StyledFloral = styled(Floral, {
  width: '73%',
  maxWidth: '490px',
  position: 'absolute',
  bottom: '-40px',
  left: '-30px',
  color: '$blue',
  zIndex: '1',
  transform: 'rotate(-55deg)',
});

const OrangeCircle = styled('div', {
  width: '61%',
  position: 'absolute',
  bottom: '-50px',
  left: '206px',
  zIndex: '0',

  '&::after': {
    content: '',
    display: 'block',
    backgroundColor: '$orange',
    borderRadius: '50%',
    width: '100%',
    paddingTop: '100%',
  }
});

const StyledDots = styled(Dots, {
  color: '$white',
  position: 'absolute',
  left: '190px',
  bottom: '143px',
  width: '43%',
  stroke: '$orange',
  strokeWidth: '5px',
  paintOrder: 'stroke',
});

function App() {

  globalStyles();

  return (
    <>
      <Header />
      <StyledMain>
        <Contact />
        <Graphics>
          <StyledFloral/>
          <OrangeCircle/>
          <StyledDots/>
        </Graphics>
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;