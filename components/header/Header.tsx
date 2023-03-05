import { NavigationSchema } from "@models/navigation.model";
import Container from "@components/container";
import * as Styled from "./Header.styled";

export interface HeaderProps {
  navigation?: NavigationSchema;
}

const Header = ({ navigation }: HeaderProps) => {
  const links = navigation?.links || [];

  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderItems>
          <Styled.HeaderItem>
            <Styled.HeaderLink href="/about">About</Styled.HeaderLink>
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <Styled.HeaderLink href="/about">Resume</Styled.HeaderLink>
          </Styled.HeaderItem>
          <Styled.HeaderItem className="logo">
            <Styled.StyledLogo />
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <Styled.HeaderLink href="/about">Blog</Styled.HeaderLink>
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <Styled.HeaderLink href="/about">Connect</Styled.HeaderLink>
          </Styled.HeaderItem>
        </Styled.HeaderItems>
      </Container>
    </Styled.Header>
  );
};

export default Header;
