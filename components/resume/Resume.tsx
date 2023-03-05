import { ResumeSchema } from '@models/page.model';
import Container from '@components/container';
import Section from './section';

export interface ResumeComponentSchema {
  data: ResumeSchema;
}

const Resume = ({ data }: ResumeComponentSchema) => {
  const { page_heading, resume_builder } = data;
  return (
    <div>
      <Container>{page_heading && <h1>{page_heading}</h1>}</Container>
      {resume_builder.length &&
        resume_builder.map((section) => (
          <Section key={section._key} data={section} />
        ))}
    </div>
  );
};

export default Resume;
