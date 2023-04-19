import { useEffect, useState } from 'react';
import { NavigationSchema } from '@models/navigation.model';
import { VisuallyHidden } from '@styles/helpers';
import Button from '@components/button';
import {
  Header as StyledHeader,
  Container,
  LogoWrap,
  HeaderLink,
  LogoSVG,
  LogoBackground,
  HeaderItems,
  HeaderItem,
} from './Header.styled';

export interface HeaderProps {
  navigation?: NavigationSchema;
}

const Header = ({ navigation }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const links = navigation?.links || [];

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;

      if (scrollY > 100 && !scrolled) {
        setScrolled(true);
      } else if (scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  return (
    <StyledHeader scrolled={scrolled}>
      <Container>
        <LogoWrap scrolled={scrolled}>
          <HeaderLink href="/">
            <VisuallyHidden>Practical Mental Health</VisuallyHidden>
            <LogoBackground aria-hidden="true" />
            <LogoSVG />
          </HeaderLink>
        </LogoWrap>

        <HeaderItems>
          <HeaderItem>
            <HeaderLink href="/about">About</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink href="/cv">Services</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink href="/blog">Resume</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <Button href="/connect">Connect</Button>
          </HeaderItem>
        </HeaderItems>
      </Container>
    </StyledHeader>
  );
};

export default Header;
