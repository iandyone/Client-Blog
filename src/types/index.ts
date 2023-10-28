import { Pages } from './enums';

export interface IPost extends ICredentials {
  id: number;
  title: string;
  content?: string;
  preview: any;
}

export interface ICredentials {
  author: string;
  date: string;
}

export interface ICategory {
  title: string;
  body: string;
  icon: any;
  href: Pages;
}
