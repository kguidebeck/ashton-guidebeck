// import { CloudinaryAsset, CLOUDINARY_ASSET_PROJECTION } from "./cloudinary-asset.model";
import { Sanity } from "@models/sanity.model";

export const NavigationType = "navigation";

export interface NavigationSchema {
  _id: string;
  // desktop_logo_asset: CloudinaryAsset;
  // mobile_logo_asset: CloudinaryAsset;
  links: Sanity.LinkList;
  social_list: Sanity.LinkList;
}

export const NAVIGATION_PROJECTION = `{
  _id,
  links->,
  social_list->
}`;
