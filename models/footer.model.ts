// import { CloudinaryAsset, CLOUDINARY_ASSET_PROJECTION } from "./cloudinary-asset.model";
import { Sanity } from "@models/sanity.model";

export const FooterType = "footer";

export interface FooterSchema extends Sanity.Document {
  // logo_asset: CloudinaryAsset;
  menus: Array<{
    _key: string;
    heading: string;
    link_list: Sanity.LinkList;
  }>;
  social_list: Sanity.LinkList;
}

export const FOOTER_PROJECTION = `{
  menus[]{
    _key,
    heading,
    link_list->
  },
  social_list->,
}`;
