import { Button } from '@ui/Button';
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
          <Button>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
};
