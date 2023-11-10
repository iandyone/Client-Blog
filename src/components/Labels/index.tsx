import { imagePlaceholder } from '@constants/animations';
import { logos } from '@constants/data';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './labels.module.scss';
import { ILabelsProps } from './types';

const { wrapper, container, titleClass, list } = styles;

const LabelsComponent: FC<ILabelsProps> = ({ data }) => {
  const { title } = data;

  return (
    <section className={wrapper} data-testid='labels-component'>
      <div className={container}>
        <h4 className={titleClass}>{title}</h4>
        <ul className={list}>
          {logos.map(({ id, icon }) => (
            <Image src={icon} alt={`logo-${id}`} key={id} placeholder={`data:image/${imagePlaceholder}`} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Labels = memo(LabelsComponent);
