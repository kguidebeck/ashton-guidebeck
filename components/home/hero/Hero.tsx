import Image from 'next/image';
import { HomeHeroSchema } from '@models/page.model';
import CircleDesktop from '@assets/svgs/CircleDesktop';
import CircleMobile from '@assets/svgs/CircleMobile';
import HeadshotBackground from '@assets/svgs/HeadshotBackground';
import RichText from '@components/ui/rich-text';
import * as Styled from './Hero.styled';

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
          {heading && <Styled.Heading mobile>{heading}</Styled.Heading>}
          <Styled.Headshot>
            <HeadshotBackground />
            {image?.asset?.url && (
              <Styled.HeadshotImage>
                <Image
                  src={image.asset.url}
                  alt={image.alt}
                  sizes="(max-width: 768px) 50vw, (max-width: 879px) 29vw, 27vw"
                  fill
                  priority
                />
              </Styled.HeadshotImage>
            )}
            {graphic?.asset?.url && (
              <Styled.PlantGraphic mobile>
                <Image
                  src={graphic.asset.url}
                  alt={graphic.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, (max-width: 879px) 30vw, 35vw"
                  priority
                />
              </Styled.PlantGraphic>
            )}
          </Styled.Headshot>
          <Styled.Copy>
            {heading && <Styled.Heading>{heading}</Styled.Heading>}
            {copy && <RichText value={copy} />}
            {cta?.url && (
              <Styled.Button href={cta.url}>{cta.text}</Styled.Button>
            )}
          </Styled.Copy>
          {graphic?.asset?.url && (
            <Styled.PlantGraphic>
              <Image
                src={graphic.asset.url}
                alt={graphic.alt}
                fill
                sizes="(max-width: 768px) 40vw, (max-width: 879px) 30vw, 35vw"
                priority
              />
            </Styled.PlantGraphic>
          )}
        </Styled.Content>
      </Styled.Container>
    </Styled.Hero>
  );
};

export default Hero;
