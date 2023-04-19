import { ResumeSchema } from '@models/page.model';
import Container from '@components/container';
import Section from './section';
import * as Styled from './Resume.styled';

export interface ResumeComponentSchema {
  data: ResumeSchema;
}

const Resume = ({ data }: ResumeComponentSchema) => {
  const { page_heading, resume_builder } = data;
  return (
    <Styled.Resume>
      <Container>
        <Styled.Header className="background-pink">
          <Styled.HeaderWrapper>
            {page_heading && <h1>{page_heading}</h1>}
            <Styled.DownloadButton
              onClick={() => {
                console.log('download pdf');
              }}
            >
              Download
            </Styled.DownloadButton>
          </Styled.HeaderWrapper>
        </Styled.Header>
        {resume_builder.length &&
          resume_builder.map((section) => (
            <Section key={section._key} data={section} />
          ))}
      </Container>
    </Styled.Resume>
  );
};

export default Resume;
