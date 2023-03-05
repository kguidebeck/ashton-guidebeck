import Container from '@components/container';
import * as Styled from './HeroHome.styled';
import { HomeHeroSchema } from '@models/page.model';
import PortableText from '@components/portable-text';

const HeroHome = ({ data }: { data: HomeHeroSchema }) => {
  const { heading, copy, cta } = data;
  return (
    <div>
      <Container>
        <Styled.Grid>
          <div>
            <Styled.Headshot>
              <Styled.ImageWrap>
                <Styled.Image
                  src="images/ashton_headshot.png"
                  alt="Headshot of Ashton"
                />
              </Styled.ImageWrap>
            </Styled.Headshot>
          </div>
          <div>
            {heading && <h1>{heading}</h1>}
            {copy && <PortableText data={copy} />}
          </div>
        </Styled.Grid>
      </Container>
    </div>
  );
};

export default HeroHome;
