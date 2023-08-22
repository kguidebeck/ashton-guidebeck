import { client } from '@utils/sanity-client';
import { ResumeSection } from '@components/resume/Resume.model';
import { IMAGE_PROJECTION, Sanity } from './sanity.model';

export interface ModulePage extends Sanity.Page {
  // marketing_modules: MarketingModulesType;
}

export const homePageType = 'page_home';
export const resumePageType = 'page_resume';
export const contactPageType = 'page_connect';

export const HOME_PROJECTION = `{
  hero {
    heading,
    copy,
    cta,
    "image": image.imageData {
      ${IMAGE_PROJECTION}
    },
    "graphic": graphic.imageData {
      ${IMAGE_PROJECTION}
    }
  }
}`;

export const RESUME_PROJECTION = `{
  seo,
  page_heading,
  resume_file {
    asset -> {
      url,
      originalFilename,
      mimeType
    }
  },
  copy,
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
  "background_desktop": background_desktop.imageData {
    ${IMAGE_PROJECTION}
  },
  "background_mobile": background_mobile.imageData {
    ${IMAGE_PROJECTION}
  },
  show_socials
}`;

export interface HomeHeroSchema {
  heading: string;
  copy: Sanity.PortableText;
  cta: Sanity.Cta;
  image: Sanity.Image;
  graphic: Sanity.Image;
}

export interface HomeSchema extends Sanity.Page {
  hero: HomeHeroSchema;
}

export interface ResumeSchema extends Sanity.Page {
  page_heading: string;
  copy?: Sanity.PortableText;
  resume_file?: Sanity.File;
  resume_builder: Array<ResumeSection>;
}

export interface ConnectSchema extends Sanity.Page {
  heading: string;
  copy?: Sanity.PortableText;
  background_desktop: Sanity.Image;
  background_mobile: Sanity.Image;
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
