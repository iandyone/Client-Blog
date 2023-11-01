'use client';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { ChangeEvent, FC, memo, useState } from 'react';

import styles from './form.module.scss';
import { IFormProps } from './types';

const { wrapper, inputClass, textareaClass, buttonClass } = styles;

const FormComponent: FC<IFormProps> = ({ button, emailPlaceholder, messagePlaceholder, namePlaceholder }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  function handlerOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setNameError('Ошибка');
  }

  function handlerOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setEmailError('Ошибка');
  }

  return (
    <form className={wrapper}>
      <Input
        name='usename'
        handlerChange={handlerOnChangeName}
        labelError={nameError}
        type='text'
        placeholder={namePlaceholder}
        value={name}
        className={inputClass}
      />
      <Input
        name='contact-email'
        handlerChange={handlerOnChangeEmail}
        labelError={emailError}
        type='email'
        placeholder={emailPlaceholder}
        value={email}
        className={inputClass}
      />
      {/* <input
        className={inputClass}
        placeholder={namePlaceholder}
        value={name}
        onChange={handlerOnChangeName}
        type='text'
      /> */}
      {/* <input className={inputClass} placeholder={emailPlaceholder} type='email' /> */}
      <textarea className={textareaClass} placeholder={messagePlaceholder} name='message' />
      <Button className={buttonClass}>{button}</Button>
    </form>
  );
};

export const Form = memo(FormComponent);
