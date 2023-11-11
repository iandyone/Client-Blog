import { imagePlaceholder } from '@constants/animations';
import { logos } from '@constants/data';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './labels.module.scss';
import { ILabelsProps } from './types';

const LabelsComponent: FC<ILabelsProps> = ({ data }) => {
  const { title } = data;

  return (
    <section className={styles.wrapper} data-testid='labels-component'>
      <div className={styles.container}>
        <h4 className={styles.titleClass}>{title}</h4>
        <ul className={styles.list}>
          {logos.map(({ id, icon }) => (
            <Image src={icon} alt={`logo-${id}`} key={id} placeholder={`data:image/${imagePlaceholder}`} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Labels = memo(LabelsComponent);
