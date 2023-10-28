import { IPost } from '@appTypes';
import postPreview1 from '@public/posts/01.jpg';
import { ICategory } from '@appTypes';
import businessIcon from '@public/homePage/business.svg';
import economyIcon from '@public/homePage/economy.svg';
import startupIcon from '@public/homePage/startup.svg';
import technologyIcon from '@public/homePage/technology.svg';
import { Pages } from '@appTypes/enums';
const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY } = Pages;

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
