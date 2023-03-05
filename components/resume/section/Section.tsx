import { ResumeSection, ResumeSubSection } from '@models/page.model';
import Container from '@components/container';
import * as Styled from './Section.styled';

const SubSection = ({ data }: { data: ResumeSubSection }) => {
  const { item_heading, subsection_width, date_range, subheading, copy } = data;

  return (
    <Styled.SubSection width={subsection_width}>
      hello
      <div>hello</div>
    </Styled.SubSection>
  );
};

const Section = ({ data }: { data: ResumeSection }) => {
  const { background, heading, items } = data;
  console.log(background);

  return (
    <Styled.Section background={background || 'white'}>
      <Container>
        <Styled.Grid>
          {heading && <Styled.Heading>{heading}</Styled.Heading>}
          {items.length &&
            items.map((item) => <SubSection key={item._key} data={item} />)}
        </Styled.Grid>
      </Container>
    </Styled.Section>
  );
};

export default Section;
