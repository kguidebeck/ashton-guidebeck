import { client } from '@utils/sanity-client';
import { Sanity } from './sanity.model';
import { ResumeSection } from '@components/resume/Resume.model';

export interface ModulePage extends Sanity.Page {
  // marketing_modules: MarketingModulesType;
}

export const homePageType = 'page_home';
export const resumePageType = 'page_resume';
export const contactPageType = 'page_contact';

export const HOME_PROJECTION = `{
  
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

export const CONTACT_PROJECTION = `{
  seo,
  heading,
  copy,
  show_socials
}`;

export interface HomeHeroSchema {
  heading: string;
  copy: Sanity.PortableText;
  cta: Sanity.Cta;
}

export interface HomeSchema extends Sanity.Page {
  hero: HomeHeroSchema;
}

export interface ResumeSchema extends Sanity.Page {
  page_heading: string;
  // resume_file,
  resume_builder: Array<ResumeSection>;
}

export interface ContactSchema extends Sanity.Page {
  heading: string;
  copy?: Sanity.PortableText;
  show_socials?: boolean;
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
