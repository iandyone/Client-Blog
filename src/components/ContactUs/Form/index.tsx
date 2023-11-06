'use client';

import { emailValidator, messagValidator, usernameValidator } from '@constants';
import emailjs from '@emailjs/browser';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { ValidationError } from 'yup';

import styles from './form.module.scss';
import { IFormProps } from './types';

const { wrapper, inputClass, textareaClass, buttonClass } = styles;

const emailServiceKey = process.env.NEXT_PUBLIC_EMAILJS_KEY ?? '';
const emailServiceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const emailTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';

const FormComponent: FC<IFormProps> = ({
  button,
  emailPlaceholder,
  messagePlaceholder,
  namePlaceholder,
  successMessage,
  sendingMessage,
}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(null);
  const [statusMessage, setStatusMessage] = useState(button);

  const handlerOnChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      setNameError(null);
      setStatusMessage(button);
    },
    [button],
  );

  const handlerOnChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setEmailError(null);
      setStatusMessage(button);
    },
    [button],
  );

  const handlerOnChangMessage = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
      setMessageError(null);
      setStatusMessage(button);
    },
    [button],
  );

  const handlerOnBlurEmail = useCallback(() => {
    if (email) {
      validateEmail(email);
    }
  }, [email]);

  const handlerOnBlurUsername = useCallback(() => {
    if (name) {
      validateUsername(name);
    }
  }, [name]);

  const handlerOnBlurMessage = useCallback(() => {
    if (message) {
      validateMessage(message);
    }
  }, [message]);

  async function validateEmail(email: string) {
    try {
      const isEmailValid = await emailValidator.validate(email);
      return isEmailValid;
    } catch (error) {
      if (error instanceof ValidationError) {
        setEmailError(error.message);
        return false;
      }
    }
  }

  async function validateUsername(username: string) {
    try {
      const isUsernameValid = await usernameValidator.validate(username);
      return isUsernameValid;
    } catch (error) {
      if (error instanceof ValidationError) {
        setNameError(error.message);
        return false;
      }
    }
  }

  async function validateMessage(message: string) {
    try {
      const isMessageValid = await messagValidator.validate(message);
      return isMessageValid;
    } catch (error) {
      if (error instanceof ValidationError) {
        setMessageError(error.message);
        return false;
      }
    }
  }

  async function sendEmail(message: string, username: string, email: string) {
    try {
      const emailData = {
        message: message,
        sender: username,
        client: email,
      };
      await emailjs.send(emailServiceID, emailTemplateID, emailData);
    } catch (error) {
      if (error) setMessageError(error);
      return;
    }
  }

  async function handlerOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage(sendingMessage);
    const isEmailValid = await validateEmail(email);
    const isUsernameValid = await validateUsername(name);
    const isMessageValid = await validateMessage(message);

    if (isEmailValid && isUsernameValid && isMessageValid) {
      await sendEmail(message, name, email);
      setStatusMessage(successMessage);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatusMessage(button);
    }
  }

  useEffect(() => {
    emailjs.init(emailServiceKey);
  }, []);

  return (
    <form className={wrapper} onSubmit={handlerOnSubmit}>
      <Input
        name='usename'
        handlerChange={handlerOnChangeName}
        handlerBlur={handlerOnBlurUsername}
        labelError={nameError}
        type='text'
        placeholder={namePlaceholder}
        value={name}
        className={inputClass}
        testID='contact-input-username'
        requred
      />
      <Input
        name='contact-email'
        handlerChange={handlerOnChangeEmail}
        handlerBlur={handlerOnBlurEmail}
        labelError={emailError}
        type='email'
        placeholder={emailPlaceholder}
        value={email}
        className={inputClass}
        testID='contact-input-email'
        requred
      />
      <Input
        className={textareaClass}
        placeholder={messagePlaceholder}
        name='message'
        value={message}
        handlerChange={handlerOnChangMessage}
        handlerBlur={handlerOnBlurMessage}
        labelError={messageError}
        testID='contact-input-message'
        requred
        textarea
      />
      <Button className={buttonClass} testID='contact-submit-button'>
        {statusMessage}
      </Button>
    </form>
  );
};

export const Form = memo(FormComponent);
