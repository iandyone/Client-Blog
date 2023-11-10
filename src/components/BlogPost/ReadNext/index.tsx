import { Digest } from '@components/Digest';
import { digest } from '@constants/data';
import { Title } from '@ui';
import { FC, memo } from 'react';

import styles from './rn.module.scss';
import { IReadNextProps } from './types';

const ReadNextComponent: FC<IReadNextProps> = ({ data, category }) => {
  const { title } = data;
  const temp = digest.filter(({ label }) => label === category).slice(0, 3);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Title>{title}</Title>
        <Digest containerClass={styles.digestClass} digests={temp} column />
      </div>
    </section>
  );
};

export const ReadNext = memo(ReadNextComponent);
