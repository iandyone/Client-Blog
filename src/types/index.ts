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
export interface ILink {
  href: Pages;
  icon: any;
  alt: string;
}

export interface IUser {
  id: number;
  name: string;
  position: string;
  profile: string;
  avatar: any;
  links: ILink[];
}
