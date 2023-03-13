export interface Docs {
  response: Response;
}
export interface Response {
  docs: Doc[];
  meta: Meta;
}
export interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section?: string;
  print_page?: string;
  source: string;
  multimedia: Multimedum[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
  subsection_name?: string;
}

export interface Multimedum {
  rank: number;
  subtype: string;
  caption: any;
  credit: any;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

export interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}

export interface Headline {
  main: string;
  kicker?: string;
  content_kicker: any;
  print_headline?: string;
  name: any;
  seo: any;
  sub: any;
}

export interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Byline {
  original?: string;
  person: Person[];
  organization?: string;
}

export interface Person {
  firstname: string;
  middlename?: string;
  lastname: string;
  qualifier: any;
  title: any;
  role: string;
  organization: string;
  rank: number;
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface InputRef {
  inputRef: React.RefObject<HTMLInputElement>;
}
