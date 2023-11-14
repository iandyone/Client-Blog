import { ChangeEvent, FormEvent } from 'react';
import { Category, Tags } from './enums';

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

export type handlerString = (value: string) => void;

export type tagsHandler = (tag: Tags) => void;

export type handlerOnSubmit = (e: FormEvent<HTMLFormElement>) => void;

export type handlerCategory = (category: Category) => void;

export type handlerTags = (tag: Tags) => void;
