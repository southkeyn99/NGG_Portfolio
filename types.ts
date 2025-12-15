export interface Credit {
  role: string;
  name: string;
}

export interface Film {
  id: string;
  title: string;
  year: string;
  role: string;
  runtime: string;
  genre: string;
  synopsis: string;
  posterUrl: string;
  posterObjectPosition?: string;
  stillUrls: string[];
  awards?: string[];
  aspectRatio?: string;
  isAi?: boolean;
  productionNote?: string;
  cast?: Credit[];
  crew?: Credit[];
}

export interface StillImage {
  id: string;
  url: string;
  caption?: string;
  type: 'film' | 'art';
}

export interface NavItem {
  label: string;
  path: string;
}