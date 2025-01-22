import { Category } from '@appTypes/enums';
import businessIcon from '@public/images/homePage/business.svg';
import economyIcon from '@public/images/homePage/economy.svg';
import startupIcon from '@public/images/homePage/startup.svg';
import techIcon from '@public/images/homePage/technology.svg';

const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY } = Category;

export const categoriesList = [
  {
    id: 1,
    title: BUSINESS,
    icon: businessIcon,
  },
  {
    id: 2,
    title: ECONOMY,
    icon: economyIcon,
  },
  {
    id: 3,
    title: STARTUP,
    icon: startupIcon,
  },
  {
    id: 4,
    title: TECHNOLOGY,
    icon: techIcon,
  },
];
