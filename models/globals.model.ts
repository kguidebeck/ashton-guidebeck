import { client } from "@utils/sanity-client";
// import { FooterSchema, FOOTER_PROJECTION } from "./footer.model";
import { NavigationSchema, NAVIGATION_PROJECTION } from "./navigation.model";
import { Sanity } from "@models/sanity.model";

export const GlobalsType = "globals";

export interface Globals extends Sanity.Document {
  // footer: FooterSchema;
  navigation: NavigationSchema;
}

export const GLOBALS_PROJECTION = `{
  _type,
  _id,
  title,
  navigation-> ${NAVIGATION_PROJECTION}
}`;

export const getGlobals = async (): Promise<Globals> => {
  return await client.fetch(`*[_id == 'globals'][0] ${GLOBALS_PROJECTION}`);
};
