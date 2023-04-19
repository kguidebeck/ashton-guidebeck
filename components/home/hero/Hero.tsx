import Container from '@components/container';
import * as Styled from './Hero.styled';
import { HomeHeroSchema } from '@models/page.model';
import PortableText from '@components/primitives/portable-text';
import CircleHome from '@assets/svgs/CircleHome';

const Hero = ({ data }: { data: HomeHeroSchema }) => {
  const { heading, copy, cta } = data;
  return (
    <div>
      <Styled.CircleBackground>
        <CircleHome />
      </Styled.CircleBackground>
      <Container>
        <Styled.Div>ahdfkl</Styled.Div>
      </Container>
    </div>
  );
};

export default Hero;
