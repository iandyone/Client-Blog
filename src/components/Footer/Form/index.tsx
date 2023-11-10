'use client';

import { emailValidator } from '@constants';
import { ENV } from '@constants/data';
import emailjs from '@emailjs/browser';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { ValidationError } from 'yup';

import styles from './footerForm.module.scss';
import { IFooterFormProps } from './types';

const emailServiceKey = ENV.EMAIL_KEY ?? '';
const emailServiceID = ENV.EMAIL_SERVICE ?? '';
const emailTemplateID = ENV.EMAIL_TEMPLATE ?? '';

export const Form: FC<IFooterFormProps> = (props) => {
  const { buttonText, placeholder, emailSuccessLabel, emailMessage, emailSender, errorMessage } = props;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [emailSuccess, setemailSuccess] = useState(null);

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setError(null);
    setemailSuccess(null);
    setEmail(value);
  }

  async function sendEmail(email: string) {
    try {
      const emailData = {
        message: emailMessage,
        sender: emailSender,
        client: email,
      };
      await emailjs.send(emailServiceID, emailTemplateID, emailData);
    } catch (error) {
      if (error) setError(errorMessage);
      return;
    }
  }

  async function validateEmail(email: string) {
    try {
      const isEmailValid = await emailValidator.validate(email);
      return isEmailValid;
    } catch (error) {
      if (error instanceof ValidationError) {
        setError(error.message);
        return false;
      }
    }
  }

  async function handlerOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isEmailValid = await validateEmail(email);

    if (isEmailValid) {
      await sendEmail(email);
      setemailSuccess(emailSuccessLabel);
    }
  }

  useEffect(() => {
    emailjs.init(emailServiceKey);
  }, []);

  return (
    <form className={styles.form} onSubmit={handlerOnSubmit} data-testid='footer-emailer'>
      <div className={styles.container}>
        <Input
          handlerChange={handlerOnChange}
          labelError={error}
          labelSuccess={emailSuccess}
          name='subscribtion'
          placeholder={placeholder}
          value={email}
          type='email'
        />
      </div>
      <Button className={styles.button}>{buttonText}</Button>
    </form>
  );
};
