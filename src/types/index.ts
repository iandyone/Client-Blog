import { getDictionary } from '@utils/dictionaries';
import { Category, Routes } from './enums';
import { Language } from './types';
import { ReactElement } from 'react';

export interface IPageData {
  data: Promise<ReturnType<typeof getDictionary>>;
}
export interface IPost extends ICredentials {
  id: number;
  title: string;
  content?: string;
  preview: any;
  labelIcon?: any;
  author: IUser;
}

export interface ICredentials {
  author: IUser | string;
  date: string;
}

export interface ICategory {
  title: string;
  body: string;
  icon: any;
  href: Routes;
}
export interface ILink {
  href: Routes;
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

export interface ILogo {
  id: number;
  icon: any;
}

export interface ITestimonials {
  id?: number;
  title?: string;
  name: string;
  location: string;
  avatar: any;
}

export interface IPageProps {
  params: {
    lang: Language;
  };
}

export interface IPageLayoutProps extends IPageProps {
  children: ReactElement;
}

export interface IPostData {
  author: IUser;
  title: string;
  label: string;
  labelIcon: any;
}

export interface IPreview {
  label?: string;
  title?: string;
  body?: string;
  labelMarked?: string;
  header?: string;
  credentials?: ICredentials;
  colored?: boolean;
  classNames?: IPreviewClasses;
}

export interface IPreviewClasses {
  wrapperClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  labelClassName?: string;
}

export interface INavigation {
  home: string;
  blog: string;
  about: string;
  contact: string;
  privacy: string;
}

export interface IDigest {
  id: number;
  label?: Category;
  title?: string;
  body?: string;
  preview: any;
  labelIcon?: any;
  author: IUser;
}
