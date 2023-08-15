import { useEffect, useState } from 'react';
import { NavigationSchema } from '@models/navigation.model';
import { VisuallyHidden } from '@styles/helpers';
import Button from '@components/ui/button';
import * as Styled from './Header.styled';
import Hamburger from '@assets/svgs/Hamburger';

export interface HeaderProps {
  navigation?: NavigationSchema;
}

const Header = ({ navigation }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = navigation?.links || [];

  const toggleMobile = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
    <Styled.Header scrolled={scrolled}>
      <Styled.Container>
        <Styled.LogoWrap scrolled={scrolled}>
          <Styled.LogoBackground aria-hidden="true" />
          <Styled.HeaderLink className="logo-link" href="/">
            <VisuallyHidden>Ashton Guidebeck</VisuallyHidden>
            <Styled.LogoSVG />
          </Styled.HeaderLink>
        </Styled.LogoWrap>

        <Styled.MobileToggle onClick={toggleMobile} isOpen={mobileOpen}>
          <Hamburger />
        </Styled.MobileToggle>

        <Styled.HeaderItems>
          <Styled.HeaderItem>
            <Styled.HeaderLink href="/">Home</Styled.HeaderLink>
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <Styled.HeaderLink href="/cv">Curriculum Vitae</Styled.HeaderLink>
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <Button href="/connect">Connect</Button>
          </Styled.HeaderItem>
        </Styled.HeaderItems>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
