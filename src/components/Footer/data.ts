import { Pages } from '@appTypes/enums';
import facebook from '@public/icons/facebook.svg';
import instagram from '@public/icons/instagram.svg';
import linkedin from '@public/icons/linkedin.svg';
import twitter from '@public/icons/twitter.svg';

const { HOME } = Pages;

export const data = {
  headerLogoText: 'Modsen Client Blog',
  bannerText: 'Subscribe to our news letter to get latest updates and news',
  address: 'Finstreet 118 2561 Fintown',
  email: 'Hello@finsweet.com ',
  index: '020 7993 2905',
};

export const links = [
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
