import { IconType } from "react-icons";

export type Menu = {
  text: string;
  route: string;
};

export type SocialMediaRoute = {
  route: string;
  icon: IconType;
};

export type StrapiResponse<T> = {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  data: T[];
};

export type Tecnology = {
  createdAt: string;
  documentId: string;
  id: number;
  name: string;
  publishedAt: string;
  updatedAt: string;
  icon: StrapiMedia;
};

export type StrapiMediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type StrapiMedia = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
