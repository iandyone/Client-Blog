import { string } from 'yup';

export const TAB_TITLE = 'Modsen Client Blog';

export const emailValidator = string()
  .email('Must be a valid email')
  .test('is-valid-email', 'Invalid email address', (value) => {
    if (!value) return true;
    const regex = /@\S+\.\S{2,}$/;
    return regex.test(value);
  })
  .min(10, 'Email must be at least 10 characters long')
  .required('Email is required');

export const messagValidator = string().min(10, 'Message must be at least 10 characters long');

export const usernameValidator = string()
  .test('is-valid-username', 'Username must consist of at least two words', (value) => {
    const words = value.split(' ');
    return words.length >= 2;
  })
  .min(4, 'Username must be at least 4 characters long');
