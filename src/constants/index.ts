import { string } from 'yup';

export const TAB_TITLE = 'Modsen Client Blog';

export const emailValidator = string()
  .email('Must be a valid email')
  .min(10, 'Email must be at least 10 characters long');
