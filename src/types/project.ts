import type { Tag } from './tag';

export type Project = {
  title: string;
  description: string;
  old: boolean;
  link: string;
  github: string | null;
  image: string | null;
  tags: Tag[];
};
