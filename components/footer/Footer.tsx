import Container from '@components/container';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <Container>
        <Styled.Content>
          <p>ASHTON GUIDEBECK</p>
          <p>&#169;{new Date().getFullYear()}</p>
        </Styled.Content>
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
