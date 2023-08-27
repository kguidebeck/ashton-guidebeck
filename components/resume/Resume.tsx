import { ResumeSchema } from '@models/page.model';
import Container from '@components/container';
import RichText from '@components/ui/rich-text';
import Section from './section';
import * as Styled from './Resume.styled';
import { useEffect, useState } from 'react';

export interface ResumeComponentSchema {
  data: ResumeSchema;
}

const updateAllPanels = () => {
  const panels = Array.from(document.querySelectorAll('.accordion-section'));

  panels.forEach((panel) => {
    const state = panel.getAttribute('data-state');
    const height = panel.getAttribute('data-height');
    const heightVal = height ? parseInt(height) : 0;
    const currentHeight = panel.scrollHeight;

    if (state === 'open' && heightVal !== currentHeight) {
      panel.setAttribute('data-height', `${currentHeight}`);
    }
  });
};

const Resume = ({ data }: ResumeComponentSchema) => {
  const [windowWidth, setWindowWidth] = useState<number>();
  const { page_heading, copy, resume_file, resume_builder } = data;

  const panelHeightListener = () => {
    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', panelHeightListener);

    return () => {
      window.removeEventListener('resize', panelHeightListener);
    };
  }, []);

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
            <Section
              key={section._key}
              data={section}
              windowWidth={windowWidth}
            />
          ))}
      </Container>
    </Styled.Resume>
  );
};

export default Resume;
