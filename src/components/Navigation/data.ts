import { Pages } from '@appTypes/enums';

const { HOME, ABOUT, BLOG, CONTACT, PRIVACY } = Pages;

export const routes = [
  { title: 'Home', href: HOME },
  { title: 'Blog', href: BLOG },
  { title: 'About Us', href: ABOUT },
  { title: 'Contact Us', href: CONTACT },
  { title: 'Privacy Policy', href: PRIVACY },
];
