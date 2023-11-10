import { ICategory, IDigest, ILink, ILogo, IPost, ITestimonials, IUser } from '@appTypes';
import { Category, Routes, Tags } from '@appTypes/enums';
import authorPreview from '@public/images/AuthorsPage/01.jpg';
import user1 from '@public/images/avatars/01.svg';
import user2 from '@public/images/avatars/02.svg';
import user3 from '@public/images/avatars/03.svg';
import user4 from '@public/images/avatars/04.svg';
import user5 from '@public/images/avatars/05.svg';
import user6 from '@public/images/avatars/06.svg';
import user7 from '@public/images/avatars/07.svg';
import user8 from '@public/images/avatars/08.svg';
import user9 from '@public/images/avatars/09.svg';
import businessIcon from '@public/images/homePage/business.svg';
import economyIcon from '@public/images/homePage/economy.svg';
import startupIcon from '@public/images/homePage/startup.svg';
import technologyIcon from '@public/images/homePage/technology.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import twitter from '@public/images/icons/twitter.svg';
import logo1 from '@public/images/logos/01.svg';
import logo2 from '@public/images/logos/02.svg';
import logo3 from '@public/images/logos/03.svg';
import logo4 from '@public/images/logos/04.svg';
import logo5 from '@public/images/logos/05.svg';
import logo6 from '@public/images/logos/06.svg';
import postPreview from '@public/images/posts/01.jpg';
import post2 from '@public/images/posts/02.jpg';
import post3 from '@public/images/posts/03.jpg';
import post4 from '@public/images/posts/04.jpg';
import post5 from '@public/images/posts/05.jpg';

const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY, HOME, AUTHOR } = Routes;

const {
  BUSINESS: BUSINESS_TAG,
  EXPERIENCE: EXPERIENCE_TAG,
  LIFE: LIFE_TAG,
  MARKETING: MARKETING_TAG,
  SCREEN: SCREEN_TAG,
  TECHNOLOGY: TECHNOLOGY_TAG,
} = Tags;

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
  {
    id: 2,
    name: 'Jonathan Vallem',
    location: 'New york, USA',
    avatar: user9,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
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
    preview: postPreview,
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
    preview: postPreview,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 3,
    author: users[2],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 4,
    author: users[3],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 5,
    author: users[4],
    date: 'May 23, 2022',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    preview: postPreview,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 6,
    author: users[5],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 7,
    author: users[6],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 8,
    author: users[7],
    date: 'May 23, 2022',
    title: '8 Figma design systems that you can download for free today.',
    preview: postPreview,
    labelIcon: startupIcon,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
];

export const digest: IDigest[] = [
  {
    id: 2,
    label: Category.STARTUP,
    title: 'Design tips for designers that cover everything you need',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[0],
    labelIcon: startupIcon,
    tags: [TECHNOLOGY_TAG, BUSINESS_TAG],
  },
  {
    id: 3,
    label: Category.BUSINESS,
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[1],
    labelIcon: businessIcon,
    tags: [EXPERIENCE_TAG, LIFE_TAG],
  },
  {
    id: 4,
    label: Category.STARTUP,
    title: 'Logo design trends to avoid in 2022',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post4,
    author: users[2],
    labelIcon: startupIcon,
    tags: [MARKETING_TAG, SCREEN_TAG],
  },
  {
    id: 5,
    label: Category.TECHNOLOGY,
    title: '8 Figma design systems you can download for free today',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post5,
    author: users[3],
    labelIcon: technologyIcon,
    tags: [TECHNOLOGY_TAG, MARKETING_TAG],
  },
  {
    id: 6,
    label: Category.ECONOMY,
    title: 'Font sizes in UI design: The complete guide to follow',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[4],
    labelIcon: economyIcon,
    tags: [EXPERIENCE_TAG, LIFE_TAG],
  },
  {
    id: 7,
    label: Category.TECHNOLOGY,
    title: '8 Figma design systems you can download for free today',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post5,
    author: users[5],
    labelIcon: technologyIcon,
    tags: [MARKETING_TAG, BUSINESS_TAG],
  },
  {
    id: 8,
    label: Category.TECHNOLOGY,
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[6],
    labelIcon: technologyIcon,
    tags: [TECHNOLOGY_TAG, BUSINESS_TAG],
  },
  {
    id: 9,
    label: Category.ECONOMY,
    title: 'Font sizes in UI design: The complete guide to follow',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[7],
    labelIcon: economyIcon,
    tags: [MARKETING_TAG, SCREEN_TAG],
  },
  {
    id: 10,
    label: Category.BUSINESS,
    title: 'Design tips for designers that cover everything you need',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post4,
    author: users[0],
    labelIcon: businessIcon,
    tags: [SCREEN_TAG, LIFE_TAG],
  },
  {
    id: 11,
    label: Category.TECHNOLOGY,
    title: 'Logo design trends to avoid in 2022',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[1],
    labelIcon: technologyIcon,
    tags: [TECHNOLOGY_TAG, LIFE_TAG],
  },
  {
    id: 12,
    label: Category.ECONOMY,
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post4,
    author: users[2],
    labelIcon: economyIcon,
    tags: [LIFE_TAG],
  },
  {
    id: 13,
    label: Category.BUSINESS,
    title: 'Font sizes in UI design: The complete guide to follow',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[3],
    labelIcon: businessIcon,
    tags: [BUSINESS_TAG],
  },
  {
    id: 14,
    label: Category.STARTUP,
    title: 'Design tips for designers that cover everything you need',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post5,
    author: users[4],
    labelIcon: startupIcon,
    tags: [MARKETING_TAG],
  },
  {
    id: 15,
    label: Category.TECHNOLOGY,
    title: 'Logo design trends to avoid in 2022',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[5],
    labelIcon: technologyIcon,
    tags: [BUSINESS_TAG],
  },
  {
    id: 16,
    label: Category.ECONOMY,
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post2,
    author: users[6],
    labelIcon: economyIcon,
    tags: [LIFE_TAG],
  },
  {
    id: 8,
    label: Category.TECHNOLOGY,
    title: 'How to build rapport with your web design clients',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    preview: post3,
    author: users[7],
    labelIcon: technologyIcon,
    tags: [TECHNOLOGY_TAG, BUSINESS_TAG],
  },
];

export const defaultDigest: IDigest = {
  id: -1,
  label: Category.STARTUP,
  title: null,
  body: null,
  preview: null,
  labelIcon: null,
  tags: [],
  author: {
    id: -1,
    avatar: null,
    links: null,
    name: 'Andrew Jonson',
    position: null,
    profile: null,
  },
};

export const defaulUser = {
  name: 'Andrew Jonson',
  avatar: authorPreview,
};
