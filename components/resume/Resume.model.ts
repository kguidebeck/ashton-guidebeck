import { Sanity } from '@models/sanity.model';

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
