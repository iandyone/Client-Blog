import { ChangeEvent } from 'react';

export type Language = 'en' | 'ru';

export type Translation =
  | 'layout'
  | 'home'
  | 'blog'
  | 'about-us'
  | 'contact-us'
  | 'privacy'
  | 'author'
  | 'post'
  | 'category';

export type handlerChangeInput = (e: ChangeEvent<HTMLInputElement>) => void;
export type handlerChangeTextatea = (e: ChangeEvent<HTMLTextAreaElement>) => void;

export type handlerChange = handlerChangeInput | handlerChangeTextatea;

export type handler = () => void;
