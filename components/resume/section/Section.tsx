import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { formatId } from '@utils/formatId';
import PortableText from '@components/primitives/portable-text';
import Container from '@components/container';
import * as Styled from './Section.styled';
import {
  ResumeDateRange,
  ResumeSection,
  ResumeSubSection,
} from '../Resume.model';

const formatDateRange = (date_range: ResumeDateRange) => {
  const { start_date, end_date, present_item } = date_range;

  if (!start_date && !end_date) return;

  let dateRange;
  const start = start_date
    ? format(parse(start_date, 'yyyy-MM-dd', new Date()), 'MMM yyyy')
    : null;
  const end = present_item
    ? 'Present'
    : end_date
    ? format(parse(end_date, 'yyyy-MM-dd', new Date()), 'MMM yyyy')
    : null;

  if (start_date && !present_item && start_date === end_date) {
    dateRange = start;
  } else if (!start_date && end_date) {
    dateRange = end;
  } else {
    dateRange = `${start} - ${end}`;
  }

  return <time>{dateRange}</time>;
};

const SubSection = ({ data }: { data: ResumeSubSection }) => {
  const { item_heading, subsection_width, date_range, subheading, copy } = data;

  return (
    <Styled.SubSection width={subsection_width}>
      <Styled.SubSectionHeading>
        {item_heading && (
          <>
            <span>{item_heading}</span>
            {formatDateRange(date_range)}
          </>
        )}
      </Styled.SubSectionHeading>
      {subheading && <Styled.SubHeading>{subheading}</Styled.SubHeading>}
      {copy && <PortableText data={copy} />}
    </Styled.SubSection>
  );
};

const Section = ({ data }: { data: ResumeSection }) => {
  const { background, heading, items } = data;

  return (
    <Styled.Section
      className={`background-${background || 'white'}`}
      background={background || 'white'}
      id={formatId(heading)}
    >
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
