import { ResumeSchema } from '@models/page.model';
import Container from '@components/container';
import RichText from '@components/ui/rich-text';
import Section from './section';
import * as Styled from './Resume.styled';

export interface ResumeComponentSchema {
  data: ResumeSchema;
}

const Resume = ({ data }: ResumeComponentSchema) => {
  const { page_heading, copy, resume_file, resume_builder } = data;

  return (
    <Styled.Resume>
      <Container>
        <Styled.Header className="background-pink">
          <Styled.HeaderWrapper>
            <div>
              {page_heading && <h1>{page_heading}</h1>}
              {copy && (
                <div className="wysiwyg">
                  <RichText value={copy} />
                </div>
              )}
            </div>
            {resume_file?.asset.url && (
              <Styled.DownloadButton
                href={`${resume_file.asset.url}`}
                target="_blank"
              >
                Download
              </Styled.DownloadButton>
            )}
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
