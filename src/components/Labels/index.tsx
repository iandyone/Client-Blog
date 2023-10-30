import { logos } from '@constants/data';
import Image from 'next/image';
import { FC } from 'react';

import { data } from './data';
import styles from './labels.module.scss';

const { wrapper, container, titleClass, list } = styles;

const { title } = data;

export const Labels: FC = () => {
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
