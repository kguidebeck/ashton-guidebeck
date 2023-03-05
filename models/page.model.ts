import { client } from '@utils/sanity-client';
import { Sanity } from './sanity.model';

export interface ModulePage extends Sanity.Page {
  // marketing_modules: MarketingModulesType;
}

export const homePageType = 'page_home';
export const resumePageType = 'page_resume';

export const HOME_PROJECTION = `{
  seo,
  hero {
    heading,
    copy,
    cta
  }
}`;

export const RESUME_PROJECTION = `{
  seo,
  page_heading,
  resume_builder [] {
    _key,
    background,
    heading,
    items[] {
      _key,
      subsection_width,
      item_heading,
      date_range,
      subheading,
      copy
    } 
  }
}`;

export interface HomeHeroSchema {
  heading: string;
  copy: Sanity.PortableText;
  cta: Sanity.Cta;
}

export interface HomeSchema extends Sanity.Page {
  hero: HomeHeroSchema;
}

export interface ResumeDateRange {
  start_date?: string;
  present_item: boolean | null;
  end_date?: string;
}

export interface ResumeSubSection {
  _key?: string;
  subsection_width: string;
  item_heading: string;
  date_range: ResumeDateRange;
  subheading: string;
  copy: Sanity.PortableText;
}

export interface ResumeSection {
  _key?: string;
  background: string;
  heading: string;
  items: Array<ResumeSubSection>;
}

export interface ResumeSchema extends Sanity.Page {
  page_heading: string;
  // resume_file,
  resume_builder: Array<ResumeSection>;
}

export const getSanityData = async <T>(
  document_id: string,
  projection: string
): Promise<T> => {
  /**
   * Get the page with its marketing_module _types under page.moduleTypes.
   */
  // const page: T = await client.fetch(
  //   `*[_id == $document_id][0] ${pageProjections[slug]}`,
  //   { document_id }
  // );
  /**
   * Generate a dynamic query that only includes projections of the modules within this page.
   */
  return await client.fetch(`*[_id == $document_id][0] ${projection}`, {
    document_id,
  });
};
