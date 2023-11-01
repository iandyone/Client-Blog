import { ChangeEvent } from 'react';

export type Language = 'en' | 'ru';

export type Translation =
  | 'layout'
  | 'home'
  | 'blog'
  | 'about'
  | 'contact-us'
  | 'privacy'
  | 'author'
  | 'blog-post';

export type handlerChange = (e: ChangeEvent<HTMLInputElement>) => void;
