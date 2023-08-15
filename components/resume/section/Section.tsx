import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { formatId } from '@utils/formatId';
import RichText from '@components/ui/rich-text';
import * as Styled from './Section.styled';
import {
  ResumeDateRange,
  ResumeSection,
  ResumeSubSection,
} from '../Resume.model';
import { useEffect, useState } from 'react';

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
      {(item_heading || subheading) && (
        <Styled.SubSectionHeadingWrap noMargin={!copy}>
          <>
            <Styled.SubSectionHeading>
              {item_heading && (
                <>
                  <span>{item_heading}</span>
                  {formatDateRange(date_range)}
                </>
              )}
            </Styled.SubSectionHeading>
            {subheading && <Styled.SubHeading>{subheading}</Styled.SubHeading>}
          </>
        </Styled.SubSectionHeadingWrap>
      )}
      {copy && (
        <div className="wysiwyg">
          <RichText value={copy} />
        </div>
      )}
    </Styled.SubSection>
  );
};

const Section = ({ data }: { data: ResumeSection }) => {
  const { heading, items } = data;
  const [isOpen, setIsOpen] = useState(true);
  const [panelHeight, setPanelHeight] = useState<number>();
  const buttonId = `button-${formatId(heading)}`;
  const sectionId = `section-${formatId(heading)}`;

  const updatePanelHeight = (state: 'open' | 'close') => {
    var panel = document.getElementById(sectionId);

    if (panel) {
      if (panelHeight !== panel.scrollHeight || state === 'close')
        setPanelHeight(state === 'open' ? panel?.scrollHeight || 0 : 0);
    }
  };

  const panelHeightListener = () => {
    updatePanelHeight(isOpen ? 'open' : 'close');
  };

  useEffect(() => {
    if (isOpen) updatePanelHeight('open');

    window.addEventListener('resize', panelHeightListener);

    return () => {
      window.removeEventListener('resize', panelHeightListener);
    };
  }, []);

  // useEffect(() => {
  //   console.log('open state: ', isOpen);
  // }, [isOpen]);

  const toggleSection = () => {
    setIsOpen((prevState) => !prevState);
    updatePanelHeight(isOpen ? 'close' : 'open');
  };

  return (
    <Styled.Section>
      {heading && (
        <Styled.AccordionButton aria-expanded={isOpen} onClick={toggleSection}>
          <Styled.Heading id={buttonId}>{heading}</Styled.Heading>
          <Styled.ExpandIcon isOpen={isOpen} className={isOpen ? 'open' : ''} />
        </Styled.AccordionButton>
      )}
      <Styled.AccordionSection
        id={sectionId}
        aria-labelledby={buttonId}
        panelHeight={panelHeight}
      >
        <Styled.SectionGrid>
          {items.length &&
            items.map((item) => <SubSection key={item._key} data={item} />)}
        </Styled.SectionGrid>
      </Styled.AccordionSection>
    </Styled.Section>
  );
};

export default Section;
