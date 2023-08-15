import Container from '@components/container';
import * as Styled from './Hero.styled';
import { HOME_PROJECTION, HomeHeroSchema } from '@models/page.model';
import CircleHome from '@assets/svgs/CircleHome';
import HeadshotBackground from '@assets/svgs/HeadshotBackground';
import RichText from '@components/ui/rich-text';
import Button from '@components/ui/button/Button';
import Image from 'next/image';

const Hero = ({ data }: { data: HomeHeroSchema }) => {
  const { heading, copy, cta, image } = data;

  return (
    <Styled.Hero>
      <Styled.CircleBackground>
        <CircleHome />
      </Styled.CircleBackground>
      <Container>
        <Styled.Content>
          <Styled.Headshot>
            <HeadshotBackground />
            {image?.asset?.url && (
              <Image
                src={image.asset.url}
                alt={image.alt}
                width={403}
                height={606}
              />
            )}
          </Styled.Headshot>

          <Styled.Copy>
            {heading && <Styled.Heading>Welcome, I'm Ashton.</Styled.Heading>}
            {copy && <RichText value={copy} />}
            {cta?.url && <Button href={cta.url}>{cta.text}</Button>}
          </Styled.Copy>
        </Styled.Content>
      </Container>
    </Styled.Hero>
  );
};

export default Hero;
