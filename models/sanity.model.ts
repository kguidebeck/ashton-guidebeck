// import { CloudinaryAsset } from "./cloudinary-asset.model";
import { Globals } from './globals.model';

export namespace Sanity {
  export interface Document {
    [x: string]: any;
    _type: string;
    _id: string;
  }

  export interface Slug {
    _type: string;
    current: string;
  }

  export interface Seo {
    title: string;
    description?: string;
    keywords?: string;
    canonical_url?: string;
    og_site_name?: string;
    og_title?: string;
    og_description?: string;
    // og_image?: CloudinaryAsset;
    itemprop_title?: string;
    itemprop_desc?: string;
    no_index?: boolean;
  }

  export interface Page extends Document {
    title: string;
    seo: Seo;
    slug?: Slug;
  }

  export interface PageProps {
    globals: Globals;
  }

  export interface Serializers {
    types?: Record<string, (props: any) => JSX.Element | null>;
    marks?: Record<string, (props: any) => JSX.Element | null>;
    list?: React.Component;
    listItem?: React.Component;
    hardBreak?: React.Component;
    container?: React.Component;
  }

  export interface PortableText {
    blocks: any[] | any;
    className?: string;
    renderContainerOnSingleChild?: boolean;
    serializers?: Serializers;
    imageOptions?: any;
    projectId?: string;
    dataset?: string;
  }

  export interface Social {
    facebook_url?: string;
    instagram_url?: string;
    twitter_url?: string;
  }

  export interface LinkList {
    title: string;
    contact_links: boolean;
    links: Array<{
      _key: string;
      heading: string;
      sub_heading: string;
      text: string;
      url: string;
      item_class: string;
      external_url: boolean;
      open_intercom: boolean;
    }>;
  }

  export interface Cta {
    text: string;
    url: string;
  }

  export interface File {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  }
}
