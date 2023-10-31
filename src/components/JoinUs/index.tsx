import { Routes } from '@appTypes/enums';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { FC } from 'react';

import styles from './joinUs.module.scss';
import { IJoinUsData } from './types';

const { wrapper, container, titleClass, content, bodyClass } = styles;

export const JoinUs: FC<IJoinUsData> = ({ data }) => {
  const { body, buttonText, title } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={bodyClass}>
          <h3 className={titleClass}>{title}</h3>
          <p className={content}>{body}</p>
          <Link href={Routes.CONTACT}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
