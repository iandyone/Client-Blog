import { getDictionary } from '@utils/dictionaries';
import { Routes } from './enums';
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
}

export interface ICredentials {
  author: string;
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

export interface IPreview {
  label?: string;
  title?: string;
  body?: string;
  labelMarked?: string;
  header?: string;
  credentials?: ICredentials;
  colored?: boolean;
  classNames?: {
    wrapperClassName?: string;
    titleClassName?: string;
    bodyClassName?: string;
    labelClassName?: string;
  };
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
  label?: string;
  title?: string;
  body?: string;
  preview: any;
}
