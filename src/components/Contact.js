import * as React from 'react';
import { styled } from '../styles/stitches.config';
import Container from './Container';
import { H2 } from './H';
import ContactForm from './ContactForm';

const StyledContact = styled('section', {
  position: 'relative',
  paddingTop: '80px',

  '@bpPortrait': {
    padding: '20px 0 50px'
  },
});

const ContactGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1.52fr',
  gridColumnGap: '130px',
  paddingLeft: '7.9vw',

  '@bpDesktop': {
    paddingLeft: '14vw',
  },

  '@bpDesktopSm': {
    gridTemplateColumns: '1fr 1.25fr',
    gridColumnGap: '100px',
    paddingLeft: '12vw',
  },

  '@bpLaptopSm': {
    paddingLeft: '5vw',
  },

  '@bpLaptop': {
    paddingLeft: 0,
  },

  '@bpPortrait': {
    gridTemplateColumns: '1fr',
    paddingLeft: 0,
  },

});

const ContactCopy = styled('div', {
  position: 'relative',
  marginTop: '20px',
  gridColumn: '1',
  gridRow: '2 / span 2',

  '&::before': {
    content: "",
    backgroundColor: '$lightPink',
    position: 'absolute',
    inset: '-20px',
    zIndex: 0,
    opacity: '0.9'
  },

  'p': {
    position: 'relative',
    zIndex: 1,
  }
});

const Contact = () => (
  <StyledContact>

    <Container>
      <ContactGrid>
        <div>
          <H2>Hello!</H2>
          <ContactCopy>
          <p>My name is Ashton - I am a recent graduate of the Jefferson Couple & Family Therapy master’s program. I am very excited to begin my career as a therapist, but I am taking some necessary space to rest and rejuvenate first!</p>

          <p>If you have questions about my next steps or an interest in working with me in any capacity, please fill out and submit this contact form, and I will be sure to return your message!</p>
          </ContactCopy>
        </div>

        <ContactForm />
      </ContactGrid>
    </Container>
  </StyledContact>

);

export default Contact;
