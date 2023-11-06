'use client';

import { emailValidator } from '@constants';
import emailjs from '@emailjs/browser';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { ValidationError } from 'yup';

import styles from './footerForm.module.scss';
import { IFooterFormProps } from './types';

const { form, container, button } = styles;
const emailServiceKey = process.env.NEXT_PUBLIC_EMAILJS_KEY ?? '';
const emailServiceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const emailTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';

export const Form: FC<IFooterFormProps> = ({
  buttonText,
  placeholder,
  emailSuccessLabel,
  emailMessage,
  emailSender,
  errorMessage,
}) => {
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
    <form className={form} onSubmit={handlerOnSubmit} data-testid='footer-emailer'>
      <div className={container}>
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
      <Button className={button}>{buttonText}</Button>
    </form>
  );
};
