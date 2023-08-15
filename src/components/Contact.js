import * as React from 'react';
import { styled } from '../styles/stitches.config';
import Container from './Container';
import { H2 } from './H';
import ContactForm from './ContactForm';
import { home } from "../data/home";

const StyledContact = styled('section', {
  position: 'relative',
  paddingTop: '80px',

  '@bpPortrait': {
    padding: '20px 0 50px'
  },
});

const ContactGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '100px',
  paddingLeft: '7.9vw',

  '@bpDesktop': {
    paddingLeft: '14vw',
  },

  '@bpDesktopSm': {
    gridTemplateColumns: '1fr 1fr',
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
  zIndex: 100,

  '&::before': {
    content: "",
    backgroundColor: '$lightPink',
    position: 'absolute',
    inset: '-20px',
    zIndex: -1,
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
          <H2>Welcome!</H2>
          <ContactCopy>
            {home.copy.map((item, index) => (
              item.type === "ul" ?
                (
                  <item.type key={`item-${index}`}>
                    {item.content.map((liItem, liIndex) => (
                      <li key={`li-${liIndex}`}>{liItem}</li>
                    ))}
                  </item.type>
                )
              :
               <item.type key={`item-${index}`}>{item.content}</item.type>
            ))}
          </ContactCopy>
        </div>

        <ContactForm />
      </ContactGrid>
    </Container>
  </StyledContact>

);

export default Contact;
