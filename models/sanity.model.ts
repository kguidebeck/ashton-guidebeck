import React from 'react';
import {
  SanityImageCrop,
  SanityImageHotspot,
} from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from '@portabletext/types';
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

  export type PortableText = PortableTextBlock[];

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
      url: string;
      originalFilename: string;
      mimeType: string;
    };
  }

  export interface SanityAsset {
    url: string;
    metadata: {
      aspectRatio: number;
      height: number;
      width: number;
    };
  }

  export interface Image {
    alt: string;
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  }
}

export const IMAGE_PROJECTION = `
  alt,
  asset->{
    _type,
    _id,
    url,
    metadata {
      "width": dimensions.width,
      "aspectRatio": dimensions.aspectRatio,
      "height": dimensions.height,
    },
  },
  crop,
  hotspot,
`;
