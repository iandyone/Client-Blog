import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './policy.module.scss';
import { IPolicyProps } from './types';

const { wrapper, container, content, titleClass, textClass, subtitleClass } = styles;

const PolicyComponent: FC<IPolicyProps> = ({ data }) => {
  const { text, title, subtext, subtitle, subtext2 } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <Title className={titleClass}>{title}</Title>
          <p className={textClass}>{text}</p>
        </div>
        <div className={content}>
          <Title className={subtitleClass}>{subtitle}</Title>
          <p className={textClass}>{subtext}</p>
          <p className={textClass}>{subtext2}</p>
        </div>
      </div>
    </section>
  );
};

export const Policy = memo(PolicyComponent);
