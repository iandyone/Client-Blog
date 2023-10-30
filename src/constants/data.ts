import { ILink, ILogo, IPost, ITestimonials, IUser } from '@appTypes';
import postPreview1 from '@public/images/posts/01.jpg';
import { ICategory } from '@appTypes';
import businessIcon from '@public/images/homePage/business.svg';
import economyIcon from '@public/images/homePage/economy.svg';
import startupIcon from '@public/images/homePage/startup.svg';
import technologyIcon from '@public/images/homePage/technology.svg';
import { Routes } from '@appTypes/enums';

import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import twitter from '@public/images/icons/twitter.svg';

import user1 from '@public/images/avatars/01.svg';
import user2 from '@public/images/avatars/02.svg';
import user3 from '@public/images/avatars/03.svg';
import user4 from '@public/images/avatars/04.svg';
import user5 from '@public/images/avatars/05.svg';
import user6 from '@public/images/avatars/06.svg';
import user7 from '@public/images/avatars/07.svg';
import user8 from '@public/images/avatars/08.svg';
import user9 from '@public/images/avatars/09.svg';

import logo1 from '@public/images/logos/01.svg';
import logo2 from '@public/images/logos/02.svg';
import logo3 from '@public/images/logos/03.svg';
import logo4 from '@public/images/logos/04.svg';
import logo5 from '@public/images/logos/05.svg';
import logo6 from '@public/images/logos/06.svg';

const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY, HOME } = Routes;

export const posts: IPost[] = [
  {
    id: 1,
    author: 'John Doe',
    date: 'May 23, 2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: postPreview1,
  },
  {
    id: 2,
    author: 'John Doe',
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: postPreview1,
  },
  {
    id: 3,
    author: 'John Doe',
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: postPreview1,
  },
  {
    id: 4,
    author: 'John Doe',
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: postPreview1,
  },
];

export const categories: ICategory[] = [
  {
    title: 'Business',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: businessIcon,
    href: BUSINESS,
  },
  {
    title: 'Startup',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: startupIcon,
    href: STARTUP,
  },
  {
    title: 'Economy',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: economyIcon,
    href: ECONOMY,
  },
  {
    title: 'Technology',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icon: technologyIcon,
    href: TECHNOLOGY,
  },
];

export const links: ILink[] = [
  {
    href: HOME,
    icon: facebook,
    alt: 'facebook',
  },
  {
    href: HOME,
    icon: twitter,
    alt: 'twitter',
  },
  {
    href: HOME,
    icon: instagram,
    alt: 'instagram',
  },
  {
    href: HOME,
    icon: linkedin,
    alt: 'linkedin',
  },
];

export const users: IUser[] = [
  {
    id: 1,
    name: 'Floyd Miles',
    position: 'Content Writer @Company',
    avatar: user1,
    profile: '/author/1',
    links,
  },
  {
    id: 2,
    name: 'Dianne Russell',
    position: 'Content Writer @Company',
    avatar: user2,
    profile: '/author/2',
    links,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    position: 'Content Writer @Company',
    avatar: user3,
    profile: '/author/3',
    links,
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    position: 'Content Writer @Company',
    avatar: user4,
    profile: '/author/8',
    links,
  },
  {
    id: 5,
    name: 'Guy Hawkins',
    position: 'Content Writer @Company',
    avatar: user5,
    profile: '/author/5',
    links,
  },
  {
    id: 6,
    name: 'Eleanor Pena',
    position: 'Content Writer @Company',
    avatar: user6,
    profile: '/author/6',
    links,
  },
  {
    id: 7,
    name: 'Robert Fox',
    position: 'Content Writer @Company',
    avatar: user7,
    profile: '/author/7',
    links,
  },
  {
    id: 8,
    name: 'Jacob Jones',
    position: 'Content Writer @Company',
    avatar: user8,
    profile: '/author/8',
    links,
  },
];

export const logos: ILogo[] = [
  { id: 1, icon: logo1 },
  { id: 2, icon: logo2 },
  { id: 3, icon: logo3 },
  { id: 4, icon: logo4 },
  { id: 5, icon: logo5 },
  { id: 6, icon: logo6 },
];

export const testimonials: ITestimonials[] = [
  {
    id: 1,
    name: 'Jonathan Vallem',
    location: 'New york, USA',
    avatar: user9,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
