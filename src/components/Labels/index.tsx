import { logos } from '@constants/data';
import Image from 'next/image';
import { FC } from 'react';

import styles from './labels.module.scss';
import { ILabelsProps } from './types';

const { wrapper, container, titleClass, list } = styles;

export const Labels: FC<ILabelsProps> = ({ data }) => {
  const { title } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <h4 className={titleClass}>{title}</h4>
        <ul className={list}>
          {logos.map(({ id, icon }) => (
            <Image src={icon} alt={`logo-${id}`} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
