import { IDigest, ILink, ILogo, IPost, ITestimonials, IUser } from '@appTypes';
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

import post2 from '@public/images/posts/02.jpg';
import post3 from '@public/images/posts/03.jpg';
import post4 from '@public/images/posts/04.jpg';
import post5 from '@public/images/posts/05.jpg';

const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY, HOME, AUTHOR } = Routes;

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
    profile: AUTHOR,
    links,
  },
  {
    id: 2,
    name: 'Dianne Russell',
    position: 'Content Writer @Company',
    avatar: user2,
    profile: AUTHOR,
    links,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    position: 'Content Writer @Company',
    avatar: user3,
    profile: AUTHOR,
    links,
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    position: 'Content Writer @Company',
    avatar: user4,
    profile: AUTHOR,
    links,
  },
  {
    id: 5,
    name: 'Guy Hawkins',
    position: 'Content Writer @Company',
    avatar: user5,
    profile: AUTHOR,
    links,
  },
  {
    id: 6,
    name: 'Eleanor Pena',
    position: 'Content Writer @Company',
    avatar: user6,
    profile: AUTHOR,
    links,
  },
  {
    id: 7,
    name: 'Robert Fox',
    position: 'Content Writer @Company',
    avatar: user7,
    profile: AUTHOR,
    links,
  },
  {
    id: 8,
    name: 'Jacob Jones',
    position: 'Content Writer @Company',
    avatar: user8,
    profile: AUTHOR,
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

export const posts: IPost[] = [
  {
    id: 1,
    author: users[0],
    date: 'May 23, 2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 2,
    author: users[1],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    labelIcon: startupIcon,
    preview: postPreview1,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 3,
    author: users[2],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 4,
    author: users[3],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 5,
    author: users[4],
    date: 'May 23, 2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 6,
    author: users[5],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 7,
    author: users[6],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 8,
    author: users[7],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview1,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
];

export const digest: IDigest[] = [
  {
    id: 2,
    label: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[0],
    labelIcon: startupIcon,
  },
  {
    id: 3,
    label: 'Startup',
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[1],
    labelIcon: startupIcon,
  },
  {
    id: 4,
    label: 'Startup',
    title: 'Logo design trends to avoid in 2022',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post4,
    author: users[2],
    labelIcon: startupIcon,
  },
  {
    id: 5,
    label: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post5,
    author: users[3],
    labelIcon: technologyIcon,
  },
  {
    id: 6,
    label: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[4],
    labelIcon: economyIcon,
  },
  {
    id: 7,
    label: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post5,
    author: users[5],
    labelIcon: technologyIcon,
  },
  {
    id: 8,
    label: 'Startup',
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[6],
    labelIcon: startupIcon,
  },
  {
    id: 9,
    label: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[7],
    labelIcon: economyIcon,
  },
  {
    id: 10,
    label: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post4,
    author: users[7],
    labelIcon: startupIcon,
  },
  {
    id: 11,
    label: 'TECHNOLOGY',
    title: 'Logo design trends to avoid in 2022',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[1],
    labelIcon: technologyIcon,
  },
  {
    id: 12,
    label: 'ECONOMY',
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post4,
    author: users[2],
    labelIcon: economyIcon,
  },
  {
    id: 13,
    label: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[3],
    labelIcon: economyIcon,
  },
  {
    id: 14,
    label: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post5,
    author: users[4],
    labelIcon: startupIcon,
  },
  {
    id: 15,
    label: 'TECHNOLOGY',
    title: 'Logo design trends to avoid in 2022',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[5],
    labelIcon: technologyIcon,
  },
];

export const mockDigest: IDigest = {
  id: -1,
  label: null,
  title: null,
  body: null,
  preview: null,
  author: {
    id: -1,
    avatar: null,
    links: null,
    name: null,
    position: null,
    profile: null,
  },
  labelIcon: null,
};
