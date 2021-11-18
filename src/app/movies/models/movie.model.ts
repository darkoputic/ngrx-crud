export interface Movie {
  id: string;
  type: string;
  akas: Array<string>;
  image: Image;
  items: Array<Item>;
  label: string;
  legacyNameText: string;
  name: string;
  paginationKey: string;
}

interface Image {
  height: number;
  width: number;
  id: string;
  url: string;
}

interface Item {
  body: string;
  head: string;
  id: string;
  image: Image;
  link: string;
  publishDateTime: Date;
  source: Source;
}

interface Source {
  id: string;
  label: string;
  link: string;
}
