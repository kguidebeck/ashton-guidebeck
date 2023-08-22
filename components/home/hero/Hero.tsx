import * as Styled from './Hero.styled';
import { HomeHeroSchema } from '@models/page.model';
import CircleDesktop from '@assets/svgs/CircleDesktop';
import CircleMobile from '@assets/svgs/CircleMobile';
import HeadshotBackground from '@assets/svgs/HeadshotBackground';
import RichText from '@components/ui/rich-text';
import Button from '@components/ui/button/Button';
import Image from 'next/image';

const Hero = ({ data }: { data: HomeHeroSchema }) => {
  const { heading, copy, cta, image, graphic } = data;

  return (
    <Styled.Hero>
      <Styled.BackgroundWrap>
        <Styled.CircleBackground>
          <CircleDesktop />
          <CircleMobile />
        </Styled.CircleBackground>
      </Styled.BackgroundWrap>
      <Styled.Container>
        <Styled.Content>
          <Styled.Headshot>
            <HeadshotBackground />
            {image?.asset?.url && (
              <Image
                src={image.asset.url}
                alt={image.alt}
                width={403}
                height={606}
                priority
              />
            )}
          </Styled.Headshot>
          <Styled.Copy>
            {heading && <Styled.Heading>Welcome, I'm Ashton.</Styled.Heading>}
            {copy && <RichText value={copy} />}
            {cta?.url && <Button href={cta.url}>{cta.text}</Button>}
          </Styled.Copy>
          {graphic?.asset?.url && (
            <Styled.PlantGraphic>
              <Image
                src={graphic.asset.url}
                width={516}
                height={590}
                alt={graphic.alt}
              />
            </Styled.PlantGraphic>
          )}
        </Styled.Content>
      </Styled.Container>
    </Styled.Hero>
  );
};

export default Hero;
