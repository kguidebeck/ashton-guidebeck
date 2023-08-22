import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useMediaQuery from '@hooks/useMediaQuery';
import Hamburger from '@assets/svgs/Hamburger';
import { VisuallyHidden } from '@styles/helpers';
import { Screen } from '@styles/constants';
import * as Styled from './Header.styled';

const Header = () => {
  const { asPath, push } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(`only screen and ${Screen.mobile}`);

  const headerLinks = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/cv',
      text: 'Curriculum Vitae',
    },
    {
      url: '/connect',
      text: 'Connect',
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();

    if (asPath !== link) {
      push(link);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLAnchorElement>,
    position: 'first' | 'last'
  ) => {
    if (!position) return;

    const relatedEl = e.relatedTarget;
    const firstEl = document.querySelector(
      '.first-element'
    ) as HTMLAnchorElement;
    const toggleEl = document.querySelector(
      '.mobile-toggle'
    ) as HTMLButtonElement;
    const previousEl = document.querySelector(
      '.previous-element'
    ) as HTMLAnchorElement;
    const lastEl = document.querySelector('.last-element') as HTMLAnchorElement;

    if (mobileOpen) {
      if (position === 'last' && relatedEl !== previousEl) {
        firstEl?.focus();
      } else if (position === 'first' && relatedEl !== toggleEl) {
        lastEl?.focus();
      }
    }
  };

  const toggleMobile = () => {
    if (initialRender) setInitialRender(false);

    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const bodyEl = document.querySelector('body') as HTMLBodyElement;
    if (bodyEl) {
      bodyEl.classList[mobileOpen ? 'add' : 'remove']('mobile-open');
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
  }, [asPath]);

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
    <Styled.Header scrolled={scrolled} isOpen={mobileOpen}>
      <Styled.Container>
        <Styled.LogoWrap scrolled={scrolled}>
          <Styled.LogoBackground aria-hidden="true" />
          <Styled.HeaderLink
            className="logo-link first-element"
            href="/"
            onClick={(e) => handleClick(e, '/')}
            onBlur={(e) => handleBlur(e, 'last')}
          >
            <VisuallyHidden>Ashton Guidebeck</VisuallyHidden>
            <Styled.LogoSVG />
          </Styled.HeaderLink>
        </Styled.LogoWrap>

        <Styled.HeaderContent scrolled={scrolled}>
          <Styled.MobileToggle
            className="mobile-toggle"
            onClick={toggleMobile}
            isOpen={mobileOpen}
            initialRender={initialRender}
          >
            <Hamburger />
          </Styled.MobileToggle>

          <Styled.HeaderItems isOpen={mobileOpen}>
            {headerLinks.map((link, index) => (
              <Styled.HeaderItem key={index}>
                {index === headerLinks.length - 1 ? (
                  <Styled.PrimaryLink
                    className="last-element"
                    href={link.url}
                    onClick={(e) => handleClick(e, link.url)}
                    onBlur={(e) => handleBlur(e, 'last')}
                    tabIndex={isMobile && !mobileOpen ? -1 : 0}
                    $scrolled={scrolled}
                  >
                    {link.text}
                  </Styled.PrimaryLink>
                ) : (
                  <Styled.HeaderLink
                    {...(index === headerLinks.length - 2 && {
                      className: 'previous-element',
                    })}
                    href={link.url}
                    onClick={(e) => handleClick(e, link.url)}
                    tabIndex={isMobile && !mobileOpen ? -1 : 0}
                  >
                    {link.text}
                  </Styled.HeaderLink>
                )}
              </Styled.HeaderItem>
            ))}
          </Styled.HeaderItems>
        </Styled.HeaderContent>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
