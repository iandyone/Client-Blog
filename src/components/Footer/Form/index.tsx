'use client';

import { emailValidator } from '@constants';
import emailjs from '@emailjs/browser';
import { Button } from '@ui/Button';
import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useState } from 'react';
import { ValidationError } from 'yup';

import { data } from './data';
import styles from './footerForm.module.scss';

const { form, input, container, label, rejected, success } = styles;
const { buttonText, placeholder, emailSuccessLabel, emailMessage, emailSender, errorMessage } = data;
const emailServiceKey = process.env.NEXT_PUBLIC_EMAILJS_KEY ?? '';
const emailServiceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const emailTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';

export const Form: FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [emailSucess, setEmailSucess] = useState(null);
  const inputClassName = useMemo(() => {
    if (emailSucess) return `${input} ${success}`;
    if (error) return `${input} ${rejected}`;
    return input;
  }, [error, emailSucess]);

  const labelClassName = useMemo(() => {
    if (emailSucess) return `${label} ${success}`;
    if (error) return `${label} ${rejected}`;
    return label;
  }, [error, emailSucess]);

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setError(null);
    setEmailSucess(null);
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
      setEmailSucess(emailSuccessLabel);
    }
  }

  useEffect(() => {
    emailjs.init(emailServiceKey);
  }, []);

  return (
    <form className={form} onSubmit={handlerOnSubmit}>
      <div className={container}>
        {(error || emailSucess) && (
          <label htmlFor='email' className={labelClassName}>
            {emailSucess ?? error}
          </label>
        )}
        <input
          name='email'
          type='email'
          value={email}
          onChange={handlerOnChange}
          placeholder={placeholder}
          className={inputClassName}
        />
      </div>
      <Button>{buttonText}</Button>
    </form>
  );
};
