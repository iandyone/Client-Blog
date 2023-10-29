import { ILink, ILogo, IPost, ITestimonials, IUser } from '@appTypes';
import postPreview1 from '@public/posts/01.jpg';
import { ICategory } from '@appTypes';
import businessIcon from '@public/homePage/business.svg';
import economyIcon from '@public/homePage/economy.svg';
import startupIcon from '@public/homePage/startup.svg';
import technologyIcon from '@public/homePage/technology.svg';
import { Pages } from '@appTypes/enums';

import facebook from '@public/icons/facebook.svg';
import instagram from '@public/icons/instagram.svg';
import linkedin from '@public/icons/linkedin.svg';
import twitter from '@public/icons/twitter.svg';

import user1 from '@public/avatars/01.svg';
import user2 from '@public/avatars/02.svg';
import user3 from '@public/avatars/03.svg';
import user4 from '@public/avatars/04.svg';
import user5 from '@public/avatars/05.svg';
import user6 from '@public/avatars/06.svg';
import user7 from '@public/avatars/07.svg';
import user8 from '@public/avatars/08.svg';
import user9 from '@public/avatars/09.svg';

import logo1 from '@public/logos/01.svg';
import logo2 from '@public/logos/02.svg';
import logo3 from '@public/logos/03.svg';
import logo4 from '@public/logos/04.svg';
import logo5 from '@public/logos/05.svg';
import logo6 from '@public/logos/06.svg';

const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY } = Pages;
const { HOME } = Pages;

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
