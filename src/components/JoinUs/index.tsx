import { Button } from '@ui/Button';
import { FC } from 'react';

import { data } from './data';
import styles from './joinUs.module.scss';

const { wrapper, container, titleClass, content, bodyClass } = styles;

const { body, buttonText, title } = data;

export const JoinUs: FC = () => {
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
